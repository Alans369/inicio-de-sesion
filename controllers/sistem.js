// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
    systemInstruction: [
        {
          text: ` {
      createItem: {
        item: {
          title: '¿Cuál es la capital de Francia?',
          questionItem: {
            question: {
              // ID de pregunta (opcional, la API lo genera si se omite)
              // questionId: 'uniqueQuestionId123',
              required: true, // Hace que la pregunta sea obligatoria
              choiceQuestion: {
                type: 'RADIO', // 'RADIO' para opción única, 'CHECKBOX' para múltiple selección
                options: [
                  { value: 'Berlín' },
                  { value: 'Madrid' },
                  { value: 'París' }, // Esta es la opción correcta
                  { value: 'Roma' },
                ],
                shuffle: false, // No mezclar el orden de las opciones
              },
              grading: {
                pointValue: 10, // Esta pregunta vale 10 puntos
                correctAnswers: {
                  answers: [
                    // El 'value' DEBE coincidir exactamente con una de las 'options'
                    { value: 'París' },
                  ],
                },
              },
            },
          },
        },
        location: {
          index: 0, // Insertar al principio del formulario (o ajusta según necesites)
        },
      },
    },  solo generas respuestas basdas en este ejemplo de  formato o este otro dependera del tipo  de preguntas que el usuario te pida aser  {
      createItem: {
        item: {
          title: '¿Cuáles de los siguientes son lenguajes de programación? (Selección Múltiple)',
          questionItem: {
            question: {
              required: false,
              choiceQuestion: {
                type: 'CHECKBOX', // Permite seleccionar varias opciones
                options: [
                  { value: 'HTML' }, // Considerado lenguaje de marcado por algunos, pero ok para el ejemplo
                  { value: 'Java' },
                  { value: 'Photoshop' },
                  { value: 'Python' },
                ],
              },
              grading: {
                pointValue: 5,
                correctAnswers: {
                  answers: [
                    { value: 'HTML' }, // Asumiendo que consideramos HTML como una respuesta válida
                    { value: 'Java' },
                    { value: 'Python' },
                  ],
                },
              },
            },
          },
        },
        location: {
          index: 1,
        },
      },
    },`,
        }
    ],
  };
  const model = 'gemini-2.5-pro-preview-05-06';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `creame 6 preguntas sobre programacion `,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Constructing Programming Questions**

I've begun to draft the structure for six unique programming questions, meticulously following the JSON format. The initial focus has been on ensuring the \`title\` element clearly articulates each problem. Currently, I'm working through the criteria for each question to ensure that I adhere to the formatting requirements and the question item is required.


**Refining Question Parameters**

I'm now refining the JSON structure for the initial two programming questions. I've ensured all required fields, like \`title\`, \`questionItem.question.required\`, and \`questionItem.question.grading.pointValue\`, are correctly set. Specifically, I'm focusing on the \`choiceQuestion\` section to ensure the correct \`type\` and that the correct answer is accurately reflected within \`correctAnswers.answers\`. I'm using the JSON to make sure I am doing this correctly. I am also working on the index number for location.


**Developing the Question Set**

I've translated my ideas into the required JSON format, ensuring each question adheres to all specified criteria: a clear title, a radio-type choice question with options, a correct answer, and a point value. All question parameters are set, with the index values incrementally increasing as required. I've double-checked the logic and syntax to ensure the structure is sound and ready for use.


`,
        },
        {
          text: `\`\`\`json
[
  {
    "createItem": {
      "item": {
        "title": "¿Qué lenguaje de programación es conocido por su uso en desarrollo web frontend y es interpretado por los navegadores?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "Python" },
                { "value": "Java" },
                { "value": "JavaScript" },
                { "value": "C++" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "JavaScript" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 0
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuál de los siguientes es un sistema de control de versiones distribuido ampliamente utilizado?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "SVN" },
                { "value": "CVS" },
                { "value": "Git" },
                { "value": "Perforce" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "Git" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 1
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "En programación orientada a objetos, ¿qué pilar se refiere a agrupar datos (atributos) y métodos (comportamientos) que operan sobre esos datos dentro de una unidad llamada clase?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "Herencia" },
                { "value": "Polimorfismo" },
                { "value": "Encapsulamiento" },
                { "value": "Abstracción" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "Encapsulamiento" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 2
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Qué significa el acrónimo 'API' en el contexto del desarrollo de software?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "Advanced Programming Interface" },
                { "value": "Application Programming Interface" },
                { "value": "Automated Program Interaction" },
                { "value": "Applied Process Integration" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "Application Programming Interface" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 3
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuál de las siguientes estructuras de datos opera bajo el principio LIFO (Last In, First Out)?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "Cola (Queue)" },
                { "value": "Pila (Stack)" },
                { "value": "Lista Enlazada (Linked List)" },
                { "value": "Árbol (Tree)" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "Pila (Stack)" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 4
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Qué palabra clave se utiliza comúnmente en muchos lenguajes de programación (como Java, C#, JavaScript) para definir una variable cuyo valor no puede ser modificado después de su asignación inicial?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "var" },
                { "value": "let" },
                { "value": "const" },
                { "value": "static" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 10,
              "correctAnswers": {
                "answers": [
                  { "value": "const" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 5
      }
    }
  }
]
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `crea me 10 preguntas sobre python 5 de opcion multiple y las otras de selecionar solo una y valdran 1 punto cada uno 
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Analyzing the User's Intent**

I'm currently focused on the user's specific requirements. I'm prioritizing the need for 10 Python questions, divided equally into two formats: multiple-choice and another, unspecified format. My initial interpretation leans towards CHECKBOX for multiple-choice, allowing for multiple correct answers. I need to clarify what the other format is.


**Deciphering the Question Formats**

I've clarified the intended formats. The user wants a mix of multiple-choice questions (using the CHECKBOX format) and single-select questions (using the RADIO format), each worth 1 point. I am now working on formulating Python questions that adhere to these specific formats. The provided JSON structures are clear guidelines for the output. I am prioritizing a balance between question complexity and clarity, ensuring the questions are answerable yet thought-provoking.


**Refining Question Structure**

I'm now focusing on the practical application of the JSON structures. I have finalized my understanding of the formats: CHECKBOX for multiple correct answers and RADIO for a single correct answer. My primary goal is to create Python questions that accurately fit these structures. I am considering different question types and will select those most appropriate for assessing Python knowledge in the specified formats. I aim for questions that are challenging, but clearly formulated.


**Constructing JSON Output**

I'm now generating the JSON output, starting with the 5 single-choice (RADIO) questions.  I'm meticulously adhering to the provided JSON structure, ensuring the correct answers are accurately reflected in the 'correctAnswers' field.  I'm double-checking the point value (set to 1) and the question titles for clarity. My focus is to create valid JSON that directly reflects the proposed questions.


**Crafting Python Questions**

I've meticulously drafted the questions, ensuring they align with the specified formats (RADIO and CHECKBOX).  I am now creating the final JSON output, including translations of questions and answers.  My priority is accuracy and adhering to the provided JSON structures, producing valid questions for the user's requirements.  I am finalizing the set, preparing to deliver the complete package.


**Finalizing Question Set**

I'm now in the final stages, meticulously reviewing the completed JSON output. I've ensured all questions adhere to the specified format, incorporating the correct answers within the relevant fields, and that the index values are correctly incremented. The translations are included and I've verified the final point allocation. I'm now ready to deliver the complete set of ten Python questions.


**Implementing the Question Set**

I'm now in the process of generating the final JSON output. I'm focusing on ensuring all questions and answers are correctly translated, the point value is accurately reflected, and that the incrementing of indexes within the JSON structure aligns with the user's initial specifications. I'm double-checking for consistency and adherence to the required formats.


**Constructing the Final JSON**

I am now generating the final JSON output. The questions, answers and index positions are ready. I have also begun the process of translating these into Spanish. My final task is to verify point values and format compliance.


**Translating and Structuring**

I am now focusing on translating the questions into Spanish and structuring the JSON data. I've begun the Spanish translation and will then ensure the JSON adheres to the specified formats, point values, and index increments. The Spanish versions will be carefully matched to the original English.


`,
        },
        {
          text: `\`\`\`json
[
  {
    "createItem": {
      "item": {
        "title": "¿Qué palabra clave se utiliza en Python para definir una función?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "func" },
                { "value": "def" },
                { "value": "function" },
                { "value": "define" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "def" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 0
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cómo se indica un comentario de una sola línea en Python?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "// comentario" },
                { "value": "# comentario" },
                { "value": "/* comentario */" },
                { "value": "<!-- comentario -->" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "# comentario" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 1
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuál es el resultado de \`print(type(10))\` en Python?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "<class 'num'>" },
                { "value": "<class 'integer'>" },
                { "value": "<class 'int'>" },
                { "value": "<type 'int'>" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "<class 'int'>" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 2
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Qué tipo de dato en Python es una colección ordenada y mutable?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "Tupla (tuple)" },
                { "value": "Conjunto (set)" },
                { "value": "Diccionario (dict)" },
                { "value": "Lista (list)" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "Lista (list)" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 3
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Qué operador se utiliza para la exponenciación en Python (ej. 2 elevado a 3)?",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "RADIO",
              "options": [
                { "value": "^" },
                { "value": "**" },
                { "value": "exp()" },
                { "value": "pow" }
              ],
              "shuffle": false
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "**" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 4
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuáles de las siguientes son formas válidas de crear una cadena de texto (string) en Python? (Selección Múltiple)",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "CHECKBOX",
              "options": [
                { "value": "\\"hola\\"" },
                { "value": "'hola'" },
                { "value": "'''hola'''" },
                { "value": "str(hola)" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "\\"hola\\"" },
                  { "value": "'hola'" },
                  { "value": "'''hola'''" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 5
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuáles de los siguientes son tipos de datos incorporados (built-in) en Python? (Selección Múltiple)",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "CHECKBOX",
              "options": [
                { "value": "Lista (list)" },
                { "value": "Array (arraytype)" },
                { "value": "Diccionario (dict)" },
                { "value": "Tupla (tuple)" },
                { "value": "Integer (integer)" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "Lista (list)" },
                  { "value": "Diccionario (dict)" },
                  { "value": "Tupla (tuple)" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 6
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Qué palabras clave se utilizan para el control de bucles en Python? (Selección Múltiple)",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "CHECKBOX",
              "options": [
                { "value": "break" },
                { "value": "continue" },
                { "value": "exit" },
                { "value": "pass" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "break" },
                  { "value": "continue" },
                  { "value": "pass" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 7
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuáles de las siguientes son bibliotecas comunes de Python utilizadas en ciencia de datos? (Selección Múltiple)",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "CHECKBOX",
              "options": [
                { "value": "NumPy" },
                { "value": "Django" },
                { "value": "Pandas" },
                { "value": "Flask" },
                { "value": "Matplotlib" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "NumPy" },
                  { "value": "Pandas" },
                  { "value": "Matplotlib" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 8
      }
    }
  },
  {
    "createItem": {
      "item": {
        "title": "¿Cuáles de los siguientes son nombres de variables válidos en Python? (Selección Múltiple)",
        "questionItem": {
          "question": {
            "required": true,
            "choiceQuestion": {
              "type": "CHECKBOX",
              "options": [
                { "value": "mi_variable" },
                { "value": "2variable" },
                { "value": "_variable_valida" },
                { "value": "mi-variable" },
                { "value": "VariableConMayuscula" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "mi_variable" },
                  { "value": "_variable_valida" },
                  { "value": "VariableConMayuscula" }
                ]
              }
            }
          }
        }
      },
      "location": {
        "index": 9
      }
    }
  }
]
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
