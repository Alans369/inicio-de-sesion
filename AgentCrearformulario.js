
const {GoogleGenAI,Type} = require('@google/genai');
const { title } = require('process');

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main() {
    try {
        const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:
      " busca el titulo del tema a este parrafo 'crea un fomulario de matematcas basicas'",
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

  console.log(response.text);
        
    } catch (error) {
        console.error(error);
        
        
    }
  
}

module.exports.AgenteTi = main;