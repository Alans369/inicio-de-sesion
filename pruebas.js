// const requests = [
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
//     },
//     {
//       "createItem": {
//         "item": {
//           "title": "¿Cuáles de las siguientes son formas de declarar una variable en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "CHECKBOX",
//                 "options": [
//                   { "value": "var" },
//                   { "value": "let" },
//                   { "value": "const" },
//                   { "value": "variable" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "var" },
//                     { "value": "let" },
//                     { "value": "const" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 3 }
//       }
//     },
//     {
//       "createItem": {
//         "item": {
//           "title": "¿Cuáles de los siguientes son operadores de comparación en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "CHECKBOX",
//                 "options": [
//                   { "value": "==" },
//                   { "value": "===" },
//                   { "value": "!=" },
//                   { "value": "&" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "==" },
//                     { "value": "===" },
//                     { "value": "!=" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 4 }
//       }
//     },
//     {
//       "createItem": {
//         "item": {
//           "title": "¿Cuáles de los siguientes métodos se utilizan para manipular el DOM (Document Object Model) en JavaScript?",
//           "questionItem": {
//             "question": {
//               "required": true,
//               "choiceQuestion": {
//                 "type": "CHECKBOX",
//                 "options": [
//                   { "value": "getElementById()" },
//                   { "value": "querySelector()" },
//                   { "value": "addClass()" },
//                   { "value": "createElement()" }
//                 ],
//                 "shuffle": true
//               },
//               "grading": {
//                 "pointValue": 1,
//                 "correctAnswers": {
//                   "answers": [
//                     { "value": "getElementById()" },
//                     { "value": "querySelector()" },
//                     { "value": "createElement()" }
//                   ]
//                 }
//               }
//             }
//           }
//         },
//         "location": { "index": 5 }
//       }
//     }
  



    
//   ];

//   console.log(requests);

// const sources = [
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXGI8YrO2mcHWke2DfduuEzDNgLZhS6_3WUGa8qtrZC6e5sVXcTv6jnkubmCo3nZs0uVEt47Gr3_0O2u3Rt9TV4hsmouVWXbwHr2DiQfvPQsShlqSW895UiB8DEmMzrmpoheF0MDnH87rTN0-_I3fqEBXFu2uzUAvP4WA5cdjL9tix9YC9i3Le3zVG4HP-cioubDo4F3yyVHuBRMDoQkmrG1YQ==',
//       title: 'hiraoka.com.pe'
//     }
//   },
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXHR1awzZ7YJgVcvXDHJ1rxtOU_GO-tfb-Jdj9pbcqp5hdBDpSS6gg4cj2-MaGRuIoYgdBREYZl9jcVeL40b6pQiNJDBa2_m30W_WONXq0PDzBfbIOe4kUvcXoAfeaEK_RVlpVJHzD88vT_A',
//       title: 'bbc.com'
//     }
//   },
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXFSpH1KhBkA5cRXsZIkMInVr_P_EYGKy5hLyKftcy7XiaHzMGxux3wWoXt4nPI-tgHbFmll7FE5Inf0AJEpM0svztSq3WMf-KqlryWib9nXtwRj8z3zwZ2-nNkZl28IjOEJlRxfmH8I37nNcOKa',
//       title: 'voyeglobal.com'
//     }
//   },
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXHIhJWBMHwgR4lWZF3CtOMCUyaLsALQo761kDSZVQKByxFYV2ANPOWFyK62xG9uFfRzXkEhM0YSrkK12hKpdQLPHEilcxePPPceHIuF-n_nJvqxpkHUscqJYH1WV7pvUfAt3ZYWZOw3J8umH4yIs34pjttUkTYMjW2j',
//       title: 'wikipedia.org'
//     }
//   },
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXFXTOAjT3yAq5WPXGl6K3iaKCejjmNNpQLef2MCb3OeW9M4u48wd6CnGzWZovGmVLPkEZTy6UqsmnipCiEXAWvuIOoVPNd7ypbg1uwb8PKg5ak-nBp_ynt4o2WHoBN4NpN-MGQhvhDrPXVnNQNrltLU9c7szb2J-PQKyZCoiohfxSeLmBkvHJPgKWRboZYGJmwDmV0rWj2kVds_Mst9fZMFh1YKONxe',
//       title: 'olympics.com'
//     }
//   },
//   {
//     web: {
//       uri: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXGGWAfT8Etlg56nqS5Hl-igyskS_SbkKW9ZTYSypxGH2wSAlsTg_n7KAB-ACThGwxlsCmgh7zA0VUi8p8D0f5D6-KFzNcPj23zSGRo8OHarMjfALzilMno8AA1g6axr9AyskB5QIRX3RvcyCcGZykiiWoeSxL9YO4x2lqFt1Q==',
//       title: 'wikipedia.org'
//     }
//   }
// ];

// // ===== OPCIÓN 1: Formato simple y limpio =====
// console.log('\n🔗 SOURCES:');
// console.log('='.repeat(50));

// sources.forEach((source, index) => {
//   console.log(`${index + 1}. ${source.web.title}`);
// });

// // ===== OPCIÓN 2: Formato más detallado =====
// console.log('\n📚 FUENTES DE INFORMACIÓN:');
// console.log('='.repeat(60));

// sources.forEach((source, index) => {
//   console.log(`\n📌 Source ${index + 1}:`);
//   console.log(`   Título: ${source.web.title}`);
//   console.log(`   URL: ${source.web.uri.substring(0, 80)}...`);
// });


function source(sources){
  sources.forEach((source, index) => {
  

  return `${index + 1}. ${source.web.title}`;
});
}


// ===== FUNCIÓN PARA FORMATO: TEXTO + [ÍNDICES] POR CADA SEGMENTO =====
function concatenarSegmentos(segmentosArray) {
  return segmentosArray.map(segmento => {
    const textoSegmento = segmento.segment.text;
    const indices = segmento.groundingChunkIndices.join(', ');

    var list = indices.split(',').map(Number);

    for (let i = 0; i < list.length; i++) {

      list[i] = list[i]+ 1;
     
    }
    

    return `${textoSegmento} [${list}]`;
  }).join('\n');
}

// ===== EJECUTAR LA FUNCIÓN =====
const resultado = concatenarSegmentos(segments);

console.log(resultado)

