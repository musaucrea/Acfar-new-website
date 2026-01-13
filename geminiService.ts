
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const searchAssistant = async (query: string) => {
  if (!API_KEY) return "AI features are unavailable. Please check API key.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const modelName = 'gemini-3-flash-preview';

  const systemInstruction = `
    You are the AI Discernment Assistant for the Africa Centre for Apologetics Research (ACFAR).
    Your goal is to help users find information about biblical apologetics, religious groups, and biblical discernment.
    
    Current request: ${query}
    
    Guidelines:
    1. Be respectful and biblically sound.
    2. Help the user "Test everything" according to 1 Thessalonians 5:21.
    3. Provide a concise summary or biblical perspective on the topic.
    4. If the user asks about a specific group, provide a neutral but critical biblical analysis.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "No response received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error processing request. Please try again later.";
  }
};
