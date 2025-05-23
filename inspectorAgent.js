//Agenteanalizador
const getInspectorFunctionDeclaration = () => {
  return {
    name: "analizar_mensaje",
    description: "Analiza un mensaje del usuario para determinar si solicita crear un formulario y extrae los parámetros necesarios",
    parameters: {
      type: "OBJECT",
      properties: {
        es_solicitud_formulario: {
          type: "BOOLEAN",
          description: "true si el usuario solicita crear un formulario, false si es chat normal"
        },
        tema: {
          type: "STRING", 
          description: "El tema o título del formulario solicitado"
        },
        numero_preguntas: {
          type: "NUMBER",
          description: "Número específico de preguntas solicitadas (si se menciona)"
        },
        preguntas_especificas: {
          type: "ARRAY",
          items: {
            type: "STRING"
          },
          description: "Lista de preguntas específicas mencionadas por el usuario"
        },
        campos_obligatorios: {
          type: "ARRAY", 
          items: {
            type: "STRING"
          },
          description: "Campos que deben ser obligatorios según el usuario"
        },
        valor_por_pregunta: {
          type: "NUMBER",
          description: "Valor o puntaje asignado a cada pregunta (si se menciona)"
        },
        instrucciones_adicionales: {
          type: "STRING",
          description: "Cualquier instrucción adicional sobre el formulario"
        }
      },
      required: ["es_solicitud_formulario"]
    }
  };
};

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

const {GoogleGenAI} = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });

async function main(promt) {
  try {
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
    config: {
      systemInstruction: instrucion,
    },
   
    
  });


  return response

    
  } catch (error) {
    console.error(error);
    return "Error al analizar el mensaje"
    
  }
  
  
}



module.exports.Inspector=main;

