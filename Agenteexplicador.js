
const {GoogleGenAI} = require('@google/genai')
var {formatsources} =require('./ConcatenarObj')

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

var memori = [
      {
        role: "user",
        parts: [{ text: "hola me llamo alan" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ]

async function main(promt) {
  const chat = await ai.chats.create({
    model: "gemini-2.0-flash",
    history: memori,
    config: {
      tools: [{googleSearch: {}}],
    },
  });

  const response = await chat.sendMessage({
    message: promt,
  });


  

  console.log(response.text);



  memori.push({ role: 'user', parts: [{ text: promt }] });


  return response.text;

  // memori.push({ role: 'user', parts: [{ text: promt }] });
  



  //  if (response.candidates[0].groundingMetadata.groundingSupports !== undefined) {
  //   console.log(response.text);
  //   // console.log(concatenar(response.candidates[0].groundingMetadata.groundingSupports))

  //   var texto = {texto: response.text }

  //   console.log('sources')

  //   var contexto = formatsources(response.candidates[0].groundingMetadata.groundingChunks)

  //   console.log(contexto)

  //   contexto.unshift(texto)

  //   memori.push({ role: 'model', parts: [{ text: contexto }] });

  //   // return contexto  

  //  }else {
  //    console.log(response.text);

  //   //  return response.text;


  //  }

  //  console.log(memori)

  


  // To get grounding metadata as web content.
  
}

// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   let chunk;
//   while ((chunk = process.stdin.read()) !== null) {

//      if (chunk.trim() === 'exit') { // Si el usuario escribe 'exit'
//        process.exit(); // Cierra el proceso
//     }

//     // Aquí procesas el dato recibido
//      main(chunk); // Llama a la función con el dato recibido
 

//     // **Para terminar la entrada (importante), podrías agregar una condición:**
   
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

module.exports.chat = main;

module.exports.history = memori;

