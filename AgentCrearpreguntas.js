
const {GoogleGenAI} = require('@google/genai');


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

const instruciones= `

Eres un agente de que se necraga de generar formatos de formularios dependiendo de lo que el usuario pida, si el usuario pide un formulario de preguntas de opción múltiple o de opción única, debes generar el formato correspondiente para la API de Google Forms.
aca esta un ejemplo de como se generan los formularios para la API de Google Forms, debes seguir este formato y no cambiarlo, solo debes cambiar las preguntas y respuestas dependiendo de lo que el usuario pida, si el usuario pide un formulario de opción única debes generar el siguiente formato:

el formato debe de empezar desde createItem con la siguiente estructura:
 solo responde con este formato y no agregues nada mas, no respondas con explicaciones ni nada, solo responde con el formato de la API de Google Forms, si el usuario pide un formulario de opción única debes generar el siguiente formato:
 no debes de poner json en el item, solo responde con el texto de la pregunta y las opciones en el formato de la API de Google Forms.


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
 
    solo generas respuestas basdas en este ejemplo de  formato o este otro dependera del tipo  de preguntas que el usuario te pida aser  
     Ejemplo de pregunta de opción múltiple
    donde el usuario puede seleccionar varias respuestas correctas

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
    
`

async function main(promt) {
  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "crea un formulario de preguntas de opción múltiple con 5 preguntas sobre python basico",
    config: {
      systemInstruction:instruciones,
    },
  });

  console.log(response.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error(error);
    return "Error al analizar el mensaje"
    
  }
}



module.exports.Agenteupdate = main;