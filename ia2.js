
const {GoogleGenAI} = require('@google/genai')



const prompt = `Alice, Bob y Carol viven en casas diferentes en la misma calle: roja, verde y azul. La persona que vive en la casa roja tiene un gato. Bob no vive en la casa verde. Carol tiene un perro. La casa verde está a la izquierda de la casa roja. Alice no tiene gato. ¿Quién vive en cada casa y qué mascota tienen?`;

let thoughts = "";
let answer = "";

async function main() {
  try {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });
    const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash-preview-05-20",
    contents: prompt,
    config: {
      thinkingConfig: {
        includeThoughts: true,
      },
      systemInstructions: "responde en español",
    },
  });

  for await (const chunk of response) {
    for (const part of chunk.candidates[0].content.parts) {
      if (!part.text) {
        continue;
      } else if (part.thought) {
        if (!thoughts) {
          console.log("Thoughts summary:");
        }
        console.log(part.text);
        thoughts = thoughts + part.text;
      } else {
        if (!answer) {
          console.log("Answer:");
        }
        console.log(part.text);
        answer = answer + part.text;
      }
    }
  }
  }catch (error) {
    console.error("Error:", error);
  }
}

 main();