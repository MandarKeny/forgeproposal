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
      .replace(/\{\{ Client Objectives \}\}/g, clientObjectives);

    // Use OpenAI to generate the final proposal
    const completion = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional business proposal writer. Enhance and finalize the following proposal:",
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