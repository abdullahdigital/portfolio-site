import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      name: "AbdullahDigital",
      description: "Portfolio and developer services MCP endpoint for AbdullahDigital.",
      version: "1.0.0",
      transport: "streamable-http",
      tools: [
        {
          name: "get_about",
          description: "Return summary information about AbdullahDigital and the services offered.",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
        },
        {
          name: "get_contact",
          description: "Return the primary contact email and location for AbdullahDigital.",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
        },
      ],
      endpoints: {
        home: "https://abdullahdigital.vercel.app/",
        contact: "https://abdullahdigital.vercel.app/contact",
        privacy: "https://abdullahdigital.vercel.app/privacy",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Vary: "Accept, Accept-Encoding",
      },
    },
  );
}

export async function POST() {
  return NextResponse.json(
    {
      status: "ok",
      message: "AbdullahDigital MCP endpoint is reachable.",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Vary: "Accept, Accept-Encoding",
      },
    },
  );
}
