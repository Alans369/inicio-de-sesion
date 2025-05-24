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

Ejemplos de chat normal:
- "Hola, ¿cómo estás?"
- "¿Puedes explicarme qué es la inteligencia artificial?"
- "Ayúdame con mi tarea de historia  


no deberas proporcionar ninguna infromacion adicional solo true o false`

const contents = [
  {
    role: 'user',
    parts: [{ text: 'hoa' }]
  }
];




const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main(promt) {
  contents.push({ role: 'user', parts: [{text:promt}] })

  console.log('Prompto:', promt);
  try {

     const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: contents
        
        });
        console.log('Respuesta del modelo:', response.text);
  
  

 

    

    
  } catch (error) {
    console.error(error);
    return "Error al analizar el mensaje"
    
  }
  
  
}



module.exports.Inspector=main;

