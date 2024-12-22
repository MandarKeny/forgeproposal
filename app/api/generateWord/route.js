import { NextResponse } from "next/server";
import {
  Document,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
  LineRuleType,
  convertMillimetersToTwip,
  Packer,
} from "docx";

export async function POST(req) {
  try {
    // Parse the request body
    const { companyName, clientName, part1Content, part2Content } = await req.json();

    // Validate required fields
    if (!companyName || !clientName) {
      return new NextResponse(
        JSON.stringify({
          error: "Company Name and Client Name are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!part1Content || !part2Content) {
      return new NextResponse(
        JSON.stringify({
          error: "Content for Part 1 and Part 2 is required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Helper function to process content and create formatted paragraphs
    const processContent = (content) => {
      const paragraphs = [];
      const lines = content.split("\n");

      lines.forEach((line) => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith("- ")) {
          // Bullet point
          paragraphs.push(
            new Paragraph({
              bullet: { level: 0 },
              spacing: {
                before: 120,
                after: 120,
                line: 360,
                lineRule: LineRuleType.AUTO,
              },
              children: [
                new TextRun({
                  text: trimmedLine.substring(2),
                  size: 24,
                }),
              ],
            })
          );
        } else if (trimmedLine.startsWith("# ")) {
          // Section heading
          paragraphs.push(
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 240, after: 120 },
              children: [
                new TextRun({
                  text: trimmedLine.substring(2),
                  bold: true,
                  size: 28,
                }),
              ],
            })
          );
        } else if (trimmedLine) {
          // Regular paragraph
          paragraphs.push(
            new Paragraph({
              spacing: {
                before: 120,
                after: 120,
                line: 360,
                lineRule: LineRuleType.AUTO,
              },
              children: [
                new TextRun({
                  text: trimmedLine,
                  size: 24,
                }),
              ],
            })
          );
        }
      });

      return paragraphs;
    };

    // Create the Word document
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: { font: "Calibri", size: 24 },
          },
        },
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: convertMillimetersToTwip(25.4),
                right: convertMillimetersToTwip(25.4),
                bottom: convertMillimetersToTwip(25.4),
                left: convertMillimetersToTwip(25.4),
              },
            },
          },
          children: [
            // Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 240, after: 240 },
              children: [
                new TextRun({
                  text: `Proposal for ${clientName}`,
                  bold: true,
                  size: 36,
                }),
              ],
            }),

            // Subtitle
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 240, after: 480 },
              children: [
                new TextRun({
                  text: `Generated by ${companyName}`,
                  size: 28,
                }),
              ],
            }),

            // Part 1 Header
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 240, after: 120 },
              children: [
                new TextRun({
                  text: "Part 1: Initial Proposal",
                  bold: true,
                  size: 32,
                }),
              ],
            }),

            // Part 1 Content
            ...processContent(part1Content),

            // Part 2 Header
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 480, after: 120 },
              children: [
                new TextRun({
                  text: "Part 2: Detailed Implementation",
                  bold: true,
                  size: 32,
                }),
              ],
            }),

            // Part 2 Content
            ...processContent(part2Content),
          ],
        },
      ],
    });

    // Generate the document buffer
    const buffer = await Packer.toBuffer(doc);

    // Return the document as a downloadable file
    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${companyName}-Proposal-for-${clientName}.docx"`,
      },
    });
  } catch (error) {
    console.error("Error generating Word document:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to generate document",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}