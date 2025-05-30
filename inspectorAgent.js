const {GoogleGenAI} = require('@google/genai')


var instrucion=`
Eres un agente especializado en analizar mensajes de usuarios para determinar si solicitan crear formularios.

Tu trabajo es:
1. Identificar si el mensaje solicita crear un formulario
2. Extraer todos los parámetros mencionados sobre el formulario
3. Ser muy preciso en la clasificación

Ejemplos de solicitudes de formulario:
- "Crea un formulario sobre matemáticas basicas"
- "Necesito un formulario de encuesta de satisfacción con 10 preguntas"
- "Haz un formulario de registro con campos obligatorios: nombre, email"
tu ceame el fomulario de tipo encuesta para elegir yo quien ganara

Ejemplos de chat normal:
- "Hola, ¿cómo estás?"
- "¿Puedes explicarme qué es la inteligencia artificial?"
- "Ayúdame con mi tarea de historia 
- me podrías crear un formulario de registro para un evento?" 

si solo te dicen que le crees un formulario sin mas detalles no es una solicitud valida de formulario
por lo que devuelves false 

si la palabra incluye crear formulario devuelves true pero en minuscula 


no deberas proporcionar ninguna infromacion adicional solo true o false`


const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
    config: {
      systemInstruction: instrucion,
    },
  });
  console.log(response.text);

  return response
}




module.exports.Inspector=main;

