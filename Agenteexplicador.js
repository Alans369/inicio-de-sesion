
const {GoogleGenAI} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

 const contents = [
  {
    role: 'user',
    parts: [{ text: 'hola me llamo alan' }]
  }
];



async function main(promt) {

    // contents.push({ role: 'user', parts: [{text:promt}] })

    contents.push(promt)

    try {
        const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: contents
        
        });
        console.log('Respuesta del modelo:', response.text);
        
    } catch (error) {
        console.error(error);
        return "Error al analizar el mensaje"
        
    }
 

}

module.exports.chat = main;

