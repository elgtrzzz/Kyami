import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const body = await request.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const result = await model.generateContent(body.message);

    const response = result.response.text();

    return Response.json({
      response: response
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      response: "Erreur : " + error.message
    }, {
      status: 500
    });
  }
}
