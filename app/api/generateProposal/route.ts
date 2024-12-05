import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key is missing. Ensure it is set in your environment variables.");
    }

    const { companyName, clientName, clientObjectives, model } = await request.json();

    // Validate required inputs
    if (!companyName || !clientName || !clientObjectives || !model) {
      return NextResponse.json(
        { error: "Missing required fields or model selection." },
        { status: 400 }
      );
    }

    if (!Array.isArray(clientObjectives)) {
      return NextResponse.json(
        { error: "Client objectives should be an array of strings." },
        { status: 400 }
      );
    }

    const modelMap = {
      "gpt-3.5-turbo": "gpt-3.5-turbo",
      "gpt-4o-mini": "gpt-4o-mini"
    };

    const selectedModel = modelMap[model as keyof typeof modelMap];
    if (!selectedModel) {
      return NextResponse.json(
        { error: "Invalid model selected. Please choose gpt-3.5-turbo or gpt-4o-mini." },
        { status: 400 }
      );
    }

    const sampleProposalPath = path.join(process.cwd(), "public/templates/SampleProposal.txt");
    let proposalTemplate;
    try {
      proposalTemplate = fs.readFileSync(sampleProposalPath, "utf-8");
    } catch (error) {
      console.error("Error reading template file:", error);
      return NextResponse.json(
        { error: "Failed to read proposal template. Ensure the file exists." },
        { status: 500 }
      );
    }

    const customizedTemplate = proposalTemplate
      .replace(/\{\{ Your Company Name \}\}/g, companyName)
      .replace(/\{\{ Client Name \}\}/g, clientName)
      .replace(/\{\{ Client Objectives \}\}/g, clientObjectives.join(", "));

    const modelConfig = {
      "gpt-3.5-turbo": { maxTokens: 4096, temperature: 0.5 },
      "gpt-4o-mini": { maxTokens: 7000, temperature: 0.7 }
    };

    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: selectedModel,
        max_tokens: modelConfig[model].maxTokens,
        temperature: modelConfig[model].temperature,
        messages: [
          {
            role: "system",
            content: `You are a professional business proposal writer specializing in IT services and solutions.
          Write a detailed proposal using the provided input. Divide the proposal into the following sections:
          - Thank You Note
          - 1. Our Understanding of Your Objectives
          - 2. Our Capabilities
          - 3. Our Solution
          - 4. Operating Model
          - 5. Engagement Roadmap
          - 6. Transition (Land Safe, Run Better, Run Different)
          - 7. Success Stories
          - 8. Why Us as Your Partner (Ensure this section lists numbered points)
          `
          },
          {
            role: "user",
            content: customizedTemplate,
          },
        ],
      });
    } catch (error: any) {
      console.error("OpenAI API Error:", error);
      return NextResponse.json(
        {
          error: "Failed to generate proposal. OpenAI API returned an error.",
          details: process.env.NODE_ENV === "development" ? error.response?.data || error.stack : undefined,
        },
        { status: error.response?.status || 500 }
      );
    }

    const generatedProposal = completion.choices[0].message.content;
    return NextResponse.json({ proposal: generatedProposal });
  } catch (error: any) {
    console.error("Error generating proposal:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate proposal.",
        details: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
