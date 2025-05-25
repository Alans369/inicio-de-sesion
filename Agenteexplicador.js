
const {GoogleGenAI} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

//  const contents = [
//   {
//     role: 'user',
//     parts: [{ text: 'hola me llamo alan' }]
//   }
// ];

var  history = [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      }
    ]



async function main(promt) {

    // contents.push({ role: 'user', parts: [{text:promt}] })

    // contents.push(promt)

    try {
        const chat = ai.chats.create({
        model: 'gemini-2.0-flash',
        history: history,
        });

        const response1 = await chat.sendMessage({
          message:promt,
        });
        console.log("Chat response :", response1.text);
        
      
        console.log("--- Imprimiendo valores de la variable 'ase' ---");

        history.forEach(item => {
            console.log(`Role: ${item.role}`);
            item.parts.forEach(part => {
                if (part.text) { // Se puede usar 'if (part.text)' o 'if (typeof part.text !== 'undefined')'
                    console.log(`  Text: ${part.text}`);
                }
            });
            console.log("-".repeat(20)); // Separador para mejor legibilidad
        });
        
    } catch (error) {
        console.error(error);
        return "Error al analizar el mensaje"
        
    }
 

}

module.exports.chat = main;

module.exports.history = history;

