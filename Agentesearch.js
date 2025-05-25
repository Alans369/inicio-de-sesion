var  {GoogleGenAI} = require('@google/genai');


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
        "quienes son lo finanalistas que jugaran la final de la champions 2025?",
    ],
    config: {
      tools: [{googleSearch: {}}],
    },
  });

  console.log(response.text);

  console.log(response.candidates[0].groundingMetadata.groundingChunks);
  

  console.log(response.candidates[0].groundingMetadata.groundingSupports);


  // To get grounding metadata as web content.
  
}



 main();