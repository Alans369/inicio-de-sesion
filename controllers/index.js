// import { GoogleGenAI } from "@google/genai";
const  {GoogleGenAI,Type,LiveClientToolResponse} = require("@google/genai")
const fs = require("node:fs");

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function search() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
        "Who individually won the most bronze medals during the Paris olympics in 2024?",
    ],
    config: {
      tools: [{googleSearch: {}}],
    },
  });
  console.log(response.text);
  // To get grounding metadata as web content.
  console.log(response.candidates[0].groundingMetadata.searchEntryPoint.renderedContent)

  return response.candidates[0].groundingMetadata.searchEntryPoint.renderedContent
}


async function main() {
  

  
  return response.text
}



const index = async (req, res) => {
  
  res.send(await search())
};

module.exports = {
  index
};