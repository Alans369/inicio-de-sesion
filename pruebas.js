const requests = [
    // 1. Asegurarse de que el formulario sea un cuestionario
    {
      updateSettings: {
        settings: {
          quizSettings: {
            isQuiz: true,
          },
        },
        updateMask: 'quizSettings.isQuiz', // Especifica qué parte de la configuración actualizar
      },
    },
    // 2. Crear la pregunta de opción múltiple calificada
  
 

    {
      "createItem": {
        "item": {
          "title": "¿Cuál de las siguientes opciones NO es un tipo de dato en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "RADIO",
                "options": [
                  { "value": "number" },
                  { "value": "string" },
                  { "value": "boolean" },
                  { "value": "integer" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "integer" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 0 }
      }
    },
    {
      "createItem": {
        "item": {
          "title": "¿Qué función se utiliza para mostrar un mensaje en la consola del navegador en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "RADIO",
                "options": [
                  { "value": "alert()" },
                  { "value": "prompt()" },
                  { "value": "console.log()" },
                  { "value": "document.write()" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "console.log()" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 1 }
      }
    },
    {
      "createItem": {
        "item": {
          "title": "¿Cuál es la forma correcta de comentar una línea en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "RADIO",
                "options": [
                  { "value": "<!-- Esto es un comentario -->" },
                  { "value": "/* Esto es un comentario */" },
                  { "value": "// Esto es un comentario" },
                  { "value": "# Esto es un comentario" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "// Esto es un comentario" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 2 }
      }
    },
    {
      "createItem": {
        "item": {
          "title": "¿Cuáles de las siguientes son formas de declarar una variable en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "CHECKBOX",
                "options": [
                  { "value": "var" },
                  { "value": "let" },
                  { "value": "const" },
                  { "value": "variable" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "var" },
                    { "value": "let" },
                    { "value": "const" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 3 }
      }
    },
    {
      "createItem": {
        "item": {
          "title": "¿Cuáles de los siguientes son operadores de comparación en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "CHECKBOX",
                "options": [
                  { "value": "==" },
                  { "value": "===" },
                  { "value": "!=" },
                  { "value": "&" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "==" },
                    { "value": "===" },
                    { "value": "!=" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 4 }
      }
    },
    {
      "createItem": {
        "item": {
          "title": "¿Cuáles de los siguientes métodos se utilizan para manipular el DOM (Document Object Model) en JavaScript?",
          "questionItem": {
            "question": {
              "required": true,
              "choiceQuestion": {
                "type": "CHECKBOX",
                "options": [
                  { "value": "getElementById()" },
                  { "value": "querySelector()" },
                  { "value": "addClass()" },
                  { "value": "createElement()" }
                ],
                "shuffle": true
              },
              "grading": {
                "pointValue": 1,
                "correctAnswers": {
                  "answers": [
                    { "value": "getElementById()" },
                    { "value": "querySelector()" },
                    { "value": "createElement()" }
                  ]
                }
              }
            }
          }
        },
        "location": { "index": 5 }
      }
    }
  



    
  ];

  console.log(requests);