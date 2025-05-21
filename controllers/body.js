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
        "title": "¿Cuál es el resultado de `print(type(10))` en Python?",
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
                { "value": "\"hola\"" },
                { "value": "'hola'" },
                { "value": "'''hola'''" },
                { "value": "str(hola)" }
              ]
            },
            "grading": {
              "pointValue": 1,
              "correctAnswers": {
                "answers": [
                  { "value": "\"hola\"" },
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


    
  ];

  module.exports.requests = requests;