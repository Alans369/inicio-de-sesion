
const {GoogleGenAI} = require('@google/genai');


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

const instruciones= `

Eres un agente de que se necraga de generar formatos de formularios dependiendo de lo que el usuario pida, si el usuario pide un formulario de preguntas de opción múltiple o de opción única, debes generar el formato correspondiente para la API de Google Forms.
aca esta un ejemplo de como se generan los formularios para la API de Google Forms, debes seguir este formato y no cambiarlo, solo debes cambiar las preguntas y respuestas dependiendo de lo que el usuario pida, si el usuario pide un formulario de opción única debes generar el siguiente formato:

el formato debe de empezar desde createItem con la siguiente estructura:
 solo responde con este formato y no agregues nada mas, no respondas con explicaciones ni nada, solo responde con el formato de la API de Google Forms, si el usuario pide un formulario de opción única debes generar el siguiente formato:
 no debes de poner json en el item, solo responde con el texto de la pregunta y las opciones en el formato de la API de Google Forms y la respuesta debe de estar en comillas simples ''.
 la propiedad de index es el numero de preguntas qu el usaurio pida en base a esto se incrementara de uno en uno 

  [
 
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
    config: {
      systemInstruction:instruciones,
    },
  });

    console.log("Respuesta de la  ia para las preguntas:", response.text);

    var respuesta = response.text.replace(/^```(?:json)?\s*|\s*```$/g, '');

    const data = JSON.parse(respuesta);  
    console.log("JSON parseado exitosamente:", data);

    return data;

  } catch (error) {
    console.error(error);
    return "Error al analizar el mensaje"
    
  }
}
main()


module.exports.Agenteupdate = main;