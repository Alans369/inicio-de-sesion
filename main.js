const {Inspector} = require('./inspectorAgent')
const {chat} = require('./Agenteexplicador')
const {AgenteTi}=require('./AgentCrearformulario')
const {Agenteupdate}=require('./AgentCrearpreguntas')
const Google = require('./controllers/client')
require('dotenv').config();

const token = process.env.Token;



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

        const titulo = await AgenteTi(mensajeUsuario);

        const arregloJavaScript = JSON.parse(titulo.text);

        // 2. Acceder al primer elemento del arreglo (que es el objeto)
        const objetoDentroDelArreglo = arregloJavaScript[0];

        // 3. Acceder a la propiedad "title" del objeto
        const tit = objetoDentroDelArreglo.title;

        console.log(tit); 

        const forImid = await Google.Createform(tit, token);

        console.log('�� Respuesta del formulario:', forImid);
      

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
 Ia.procesarMensaje("crea un fromulario sobre python");
