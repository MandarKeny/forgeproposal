import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { companyName, clientName, clientObjectives } = await request.json();

    // Validate required inputs
    if (!companyName || !clientName || !clientObjectives) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Load the sample proposal template
    const sampleProposalPath = path.join(process.cwd(), 'public/templates/SampleProposal.txt');
    let proposalTemplate: string;
    
    try {
      proposalTemplate = fs.readFileSync(sampleProposalPath, 'utf-8');
    } catch (error) {
      console.error('Error reading template file:', error);
      return NextResponse.json(
        { error: 'Failed to read proposal template' },
        { status: 500 }
      );
    }

    // Replace placeholders with actual values
    const customizedTemplate = proposalTemplate
      .replace(/\{\{ Your Company Name \}\}/g, companyName)
      .replace(/\{\{ Client Name \}\}/g, clientName)
      .replace(/\{\{ Client Objectives \}\}/g, clientObjectives.join(', '));

    // Use OpenAI to generate the final proposal
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use GPT-3.5 for cost-efficiency
      max_tokens: 3500, // Allow enough content for 4-5 pages
      temperature: 0.7, // Balanced creativity and focus
      messages: [
        {
          role: "system",
          content: `
You are a professional business proposal writer at an IT services company. Provide a detailed, slightly elaborate, and polished proposal with persuasive language and comprehensive information based on the provided context. The proposal should include:
- Our understanding of your objectives
- Our capabilities
- Proposed solution
- SLAs and KPIs
- Governance
- Why partner with us
- Featured enablers of our services

The response must be between 4 to 5 pages long, ensuring thoroughness without unnecessary repetition.
          `,
        },
        {
          role: "user",
          content: customizedTemplate,
        }
      ]
    });

    const generatedProposal = completion.choices[0].message.content;
    
    return NextResponse.json({ proposal: generatedProposal });
    
  } catch (error) {
    console.error('Error generating proposal:', error);
    return NextResponse.json(
      { error: 'Failed to generate proposal' },
      { status: 500 }
    );
  }
}
