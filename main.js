const {Inspector} = require('./inspectorAgent')

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
      await Inspector(mensajeUsuario)
     
      
      }
      catch (error) {

      }

}

}


const Ia = new Main();
Ia.procesarMensaje("Hola, ¿cómo estás?")