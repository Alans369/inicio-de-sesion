const {Type} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

// async function main() {

//     try {
//     const chat = ai.chats.create({
//     model: "gemini-2.0-flash",
//     history: [
//       {
//         role: "user",
//         parts: [{ text: "Hello" }],
//       },
//       {
//         role: "model",
//         parts: [{ text: "Great to meet you. What would you like to know?" }],
//       },
//     ],
//   });

//   const response1 = await chat.sendMessage({
//     message: "I have 2 dogs in my house.",
//   });
//   console.log("Chat response 1:", response1.text);

//   const response2 = await chat.sendMessage({
//     message: "How many paws are in my house?",
//   });
//   console.log("Chat response 2:", response2.text);

//     }
//     catch (error) {
//         console.error("Error:", error);
//     }

// }




function setLightValues(brightness, color_temp) {
  return {
    brightness: brightness,
    colorTemperature: color_temp
  };
}

module.exports.setLightValuesFunctionDeclaration = setLightValuesFunctionDeclaration;