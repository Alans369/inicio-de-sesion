const  {GoogleGenAI} = require("@google/genai");
const { responseFormatFromJSON } = require("@mistralai/mistralai/models/components");

let miDiccionario = {};
let textoprincipal="00"
let textofinal="00"
  async function main() {


    const ai = new GoogleGenAI({ apiKey: "AIzaSyDHIVg7RzPbHY4s0YYzvb4yswT8nStYg38" });
   
    const tools = [
      { googleSearch: {} },
    ];
    const config = {
      tools,
      responseMimeType: 'text/plain',
    };
    const model = 'gemini-2.5-flash-preview-04-17';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `quienes son los finalistas de la champions`,
          },
        ],
      },
    ];
  
    try {
        // Get the complete response without streaming
        const response = await ai.models.generateContent({
          model,
          config,
          contents,
        });
        
        // Extraer y mostrar el texto completo de la respuesta
        console.log('===== TEXTO COMPLETO DE LA RESPUESTA =====');
        
        // Buscar el texto de respuesta en diferentes posibles estructuras
        let responseText = '';
        
        if (response.candidates?.[0]?.content?.parts?.[0]?.text) {
          responseText = response.candidates[0].content.parts[0].text;
        } else if (response.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
          responseText = response.response.candidates[0].content.parts[0].text;
        }
        
        if (responseText) {
          console.log(responseText);
          textoprincipal=responseText
        } else {
          console.log('No se encontró el texto de la respuesta');
        }
        
        // Extraer URLs, títulos y segmentos de groundingSupports
        console.log('\n\n===== URLs Y TÍTULOS ENCONTRADOS =====');
        
        let groundingChunks = null;
        
        // Verificamos si existe la estructura groundingMetadata.groundingChunks
        if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
          groundingChunks = response.candidates[0].groundingMetadata.groundingChunks;
        } else if (response.response?.candidates?.[0]?.groundingMetadata?.groundingChunks) {
          groundingChunks = response.response.candidates[0].groundingMetadata.groundingChunks;
        }
        
        // Imprimir URLs y títulos
        if (groundingChunks) {
          groundingChunks.forEach((chunk, index) => {
            if (chunk.web) {
            //   console.log(`\nResultado ${index + 1}:`);
            //   console.log(`URL: ${chunk.web.uri || chunk.web.url}`);
            //   console.log(`Título: ${chunk.web.title}`);
              const web = [chunk.web.uri]
              const titulo = [chunk.web.title]
              miDiccionario[titulo] = web
              console.log(miDiccionario)
            }
          });
        } else {
          console.log('No se encontraron groundingChunks en la respuesta');
        }
        
        // Extraer y mostrar los groundingSupports (segmentos de texto)
        console.log('\n\n===== SEGMENTOS DE TEXTO Y SUS FUENTES =====');
        
        let groundingSupports = null;
        
        if (response.candidates?.[0]?.groundingMetadata?.groundingSupports) {
          groundingSupports = response.candidates[0].groundingMetadata.groundingSupports;
        } else if (response.response?.candidates?.[0]?.groundingMetadata?.groundingSupports) {
          groundingSupports = response.response.candidates[0].groundingMetadata.groundingSupports;
        }
        
        if (groundingSupports && groundingChunks) {
          groundingSupports.forEach((support, index) => {
            // console.log(`\nSegmento ${index + 1}:`);
            console.log(`Texto: "${support.segment.text}"`);
            textofinal+=support.segment.text
            // console.log(`Índices: ${support.segment.startIndex || 0} - ${support.segment.endIndex}`);
            // console.log('Fuentes (índices):');
            
            // Mostrar los groundingChunkIndices y los títulos correspondientes
            // support.groundingChunkIndices.forEach(chunkIndex => {
            //   if (groundingChunks[chunkIndex]?.web) {
            //     console.log(`  [${chunkIndex}] ${groundingChunks[chunkIndex].web.title}`);
            //   } else {
            //     console.log(`  [${chunkIndex}] Fuente no disponible`);
            //   }
            // });
          });
        } else {
          console.log('No se encontraron groundingSupports en la respuesta');
        }

        return [textoprincipal,miDiccionario,textofinal]
        
      } catch (error) {
        console.error('Error al obtener la respuesta:', error);
      }
  }
  
  const index = async (req, res) => {
  
    res.send(await main())
  };
  
  module.exports = {
    index
  };