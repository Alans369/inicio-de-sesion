const {Inspector} = require('./inspectorAgent')
const {chat} = require('./Agenteexplicador')
const {AgenteTi}=require('./AgentCrearformulario')

class Main {
  constructor() {
    console.log('🚀 Sistema Multi-Agente iniciado correctamente');
  }


   async procesarMensaje(mensajeUsuario) {
    try {
      console.log('\n=== INICIANDO PROCESAMIENTO ===');
      console.log(`📨 Mensaje del usuario: "${mensajeUsuario}"`);
      
      // PASO 1: Análisis e inspección del mensaje
      console.log('\n--- PASO 1: ANÁLISIS DEL MENSAJE ---');
      var responses = await Inspector(mensajeUsuario);
      console.log('🔍 Respuesta del Inspector:', responses.text);

      if (responses.text.trim() == "true") {
        console.log('✅ El mensaje indica que se solicita crear un formulario.');
        console.log('🔍 Análisis del mensaje:');
        
        
        // PASO 2: Generación de formulario
        console.log('\n--- PASO 2: GENERACIÓN DEL FORMULARIO ---');
        // Aquí iría la lógica para generar el formulario basado en la respuesta del inspector
        // Por ejemplo, podrías llamar a otro agente o función para crear el formulario

      }
      if (responses.text.trim() == "false") {
        console.log('❌ El mensaje no indica que se solicite crear un formulario.');
        await chat(mensajeUsuario)
        
        
      }
     
      
      }
      catch (error) {
        console.error('❌ Error al procesar el mensaje:', error);

      }

}

}


const Ia = new Main();
// Ia.procesarMensaje("come me llamo yo");
AgenteTi();