import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  const { message } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
  });

  const result = await model.generateContent(message);

  const response = result.response.text();

  return Response.json({
    response
  });
}
