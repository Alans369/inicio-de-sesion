var  {GoogleGenAI} = require('@google/genai');


const {history} = require('./Agenteexplicador')


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

const config = {
    responseMimeType: 'text/plain',
    systemInstruction: [
        {
          text: ` [
//     // 1. Asegurarse de que el formulario sea un cuestionario
//     {
//       updateSettings: {
//         settings: {
//           quizSettings: {
//             isQuiz: true,
//           },
//         },
//         updateMask: 'quizSettings.isQuiz', // Especifica qué parte de la configuración actualizar
//       },
//     },
//     // 2. Crear la pregunta de opción múltiple calificada
  
 

//     {
//       "createItem": {
//         "item": {
//           "title": "¿Cuál de las siguientes opciones NO es un tipo de dato en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "RADIO",
//                 "options": [
//                   { "value": "number" },
//                   { "value": "string" },
//                   { "value": "boolean" },
//                   { "value": "integer" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "integer" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 0 }
//       }
//     },
//     {
//       "createItem": {
//         "item": {
//           "title": "¿Qué función se utiliza para mostrar un mensaje en la consola del navegador en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "RADIO",
//                 "options": [
//                   { "value": "alert()" },
//                   { "value": "prompt()" },
//                   { "value": "console.log()" },
//                   { "value": "document.write()" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "console.log()" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 1 }
//       }
//     },
//     {
//       "createItem": {
//         "item": {
//           "title": "¿Cuál es la forma correcta de comentar una línea en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "RADIO",
//                 "options": [
//                   { "value": "<!-- Esto es un comentario -->" },
//                   { "value": "/* Esto es un comentario */" },
//                   { "value": "// Esto es un comentario" },
//                   { "value": "# Esto es un comentario" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "// Esto es un comentario" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 2 }
//       }
//     },]

cuando te pasen formatos asi tu deber es formatearlo para poderle explicar al usaurio bien en forma natural como si tu ubieras creado esto pero debes de maquillar este formato por que se ve feo asi  pero solo respondele de forma explicativa de donde empieza el fromato pro ejemplo puedes de e creado el fomualrio con las siguinetes 6 preguntas la prguntas su pocibles respuestas y la correcta y el tipo de pregunta que es  
`,
        }
    ],
}

async function main(promt) {
 
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
    config: config,
  });

  history.push({ role: 'model', parts: [{ text: response.text }] });
  
  return response.text;

}

module.exports.context = main;