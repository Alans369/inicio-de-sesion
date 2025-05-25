
const {GoogleGenAI} = require('@google/genai');


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

const instruciones= `

eres un agente de  que crea formatos basados en lo que el usaurio pida y crea preguntas de tipo quiz en base a las instrucciones que el usuario te da
solo puedes responder en formato JSON y no debes de dar explicaciones ni nada mas solo el JSON que te pido

Produce JSON matching this specification:
  [
  {
      updateSettings: {
        settings: {
          quizSettings: {
            isQuiz: true,
          },
        },
        updateMask: 'quizSettings.isQuiz', 
      },
    },
 
  {
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
    },
]
      

    
`

async function main(promt) {
  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
    responseMimeType: 'text/plain',
    config: {
      systemInstruction:instruciones,
    },
  });


    var respuesta = response.text.replace(/^```(?:json)?\s*|\s*```$/g, '');

    const data = JSON.parse(respuesta);  
    console.log("JSON parseado exitosamente:", data);

    return data;

  } catch (error) {
    console.error(error);
    return "Error al analizar el mensaje"
    
  }
}



module.exports.Agenteupdate = main;