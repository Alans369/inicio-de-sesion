const {Inspector} = require('./inspectorAgent')
const {chat,history} = require('./Agenteexplicador')
const {AgenteTi}=require('./AgentCrearformulario')
const {Agenteupdate}=require('./AgentCrearpreguntas')
const {Createform,Createbody}= require('./Google')
require('dotenv').config();






class Main {
  constructor() {
    console.log('🚀 Sistema Multi-Agente iniciado correctamente');
  }


   async procesarMensaje(mensajeUsuario,token) {
    try {
      console.log('\n=== INICIANDO PROCESAMIENTO ===');
      console.log(`📨 Mensaje del usuario: "${mensajeUsuario}"`);
      
      // PASO 1: Análisis e inspección del mensaje
      console.log('\n--- PASO 1: ANÁLISIS DEL MENSAJE ---');
      var response = await  Inspector(mensajeUsuario);
      console.log('🔍 Respuesta del Inspector:', response.text);

      if (response.text.trim() == "true") {
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

        const formulario = await Createform(tit,token);

        console.log('�� Respuesta  del id formulario:',formulario[0]);

        history.push({ role: 'model', parts: [{text: `El formulario ${tit} a sido creado  con exito y lo e guardado en el drive   link  ${formulario[1]}`}] })

        


        // PASO 3: Creación de preguntas al formulario
        console.log('\n--- PASO 3: CREACIÓN DE PREGUNTAS AL FORMULARIO ---');

        var body = await Agenteupdate(mensajeUsuario);


        const Crearpreguntas = await Createbody(token,formulario[0],body);
        console.log(Crearpreguntas)

        if (Crearpreguntas) {
          console.log('�� Preguntas creadas con éxito al formulario:', formulario[0]);
          history.push({ role: 'model', parts: [{text: `Las preguntas al formulario ${tit} han sido creadas con éxito`}] })

          return chat('Explicame que preguntas creastes y me daras el link del formulario')

          
        }
        else {
                  console.error('�� Error al crear las preguntas al formulario.');
            } 




        
      

      // }  
      }

      if (response.text.trim() == "false") {
        console.log('❌ El mensaje no indica que se solicite crear un formulario.');
        return  chat(mensajeUsuario)
      }


      }
      catch (error) {
        console.error('❌ Error al procesar el mensaje:', error);

      }

}

}


const Ia = new Main();


module.exports.ia = Ia;
//  Ia.procesarMensaje("crea u formualrio de python con 5v preguntas sibre funciones basccas");
//  Ia.procesarMensaje("hola, ¿cómo estás?");


// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   let chunk;
//   while ((chunk = process.stdin.read()) !== null) {

//      if (chunk.trim() === 'exit') { // Si el usuario escribe 'exit'
//        process.exit(); // Cierra el proceso
//     }

//     // Aquí procesas el dato recibido
//      Ia.procesarMensaje(chunk); // Llama a la función con el dato recibido
 

//     // **Para terminar la entrada (importante), podrías agregar una condición:**
   
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });
