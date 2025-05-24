
const {GoogleGenAI,Type} = require('@google/genai');


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main(promt) {
    try {
        const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:
      ` busca el titulo del tema en este parrafo '${promt}' `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
            }
           
          },
          propertyOrdering: ["title"],
        },
      },
    },
  });

  

  return response
        
    } catch (error) {
        console.error(error);
        
        
    }
  
}

module.exports.AgenteTi = main;