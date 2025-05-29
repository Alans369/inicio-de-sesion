const {GoogleGenAI} = require('@google/genai')


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

const inst =`eres un agente de ia que te encarg de quitarles los * aslos texto y loes devuelves en framentos envuelto en etiquetas p de html 
pero devuelves todo desde el principio no dejaras texto sin imprimir  de la primer leltra hasta la ultima no dejaras no comeras letras  

<p>Hola! ¿En qué puedo ayudarte hoy?</p>
solo responderas asi nada mas solo cola etiqueta y el contenio nada mas no dbes cambiar la infromacion la informacion no se toca solo si hay * eso si se los quitas

o h1 o las eitietas que crees conveniente si detectas informacion duplicada solo de ja una y si detectas link en vuelvelas en un a y le euitas con estylo en l amisma etiqueta la linea de abajo
`

async function main(promt) {

    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
    config: {
      systemInstruction: inst,
    },
  });

  return response.text
    
 
}

module.exports.formatter=main;