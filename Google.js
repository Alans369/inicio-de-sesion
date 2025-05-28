
const { google } = require('googleapis');

require('dotenv').config();





const oauth2Client = new google.auth.OAuth2( 
     CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
) ; 

const SCOPES = ['https://www.googleapis.com/auth/forms.body', 'https://www.googleapis.com/auth/drive'];

function autenticacion(){
    const  url  =  oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        // If you only need one scope, you can pass it as a string
        scope: SCOPES,
    });
    return url
}

async function getToken(code,res){

    try {
        const {tokens} = await oauth2Client.getToken(code)
        oauth2Client.setCredentials(tokens);
        res.cookie('Token',tokens.access_token);
         console.log(tokens.access_token)

        return tokens.access_token
        
    } catch (error) {
        return 'error'
        
    }
    
}

async function createForm(titulo,token) {
  try {
    const auth = new google.auth.OAuth2();

    // Establece las credenciales usando el access token
    auth.setCredentials({
      access_token: token,
      // Si también tienes un refresh_token y quieres que la biblioteca maneje la renovación, inclúyelo:
      // refresh_token: 'TU_REFRESH_TOKEN_OBTENIDO',
      // expiry_date: EXPIRATION_TIMESTAMP, // Opcional: timestamp de expiración del access token
    });
    const forms = google.forms({ version: 'v1', auth });
    
    const newForm = await forms.forms.create({
      requestBody: {
        info: {
          title: 'Formulario Creado con Access Token',
          documentTitle: 'Formulario Access Token',
        },
      },
    });

    const formId = newForm.data.formId;
    console.log(`Formulario creado con ID: ${formId}`);
    console.log(`Enlace para editar: ${newForm.data.responderUri}`);
    
    return [formId,newForm.data.responderUri];
  } catch (error) {
    console.error('Error al crear el formulario:', error.message);
    throw error;
  }
}


module.exports.autenticacion=autenticacion;

module.exports.getToken=getToken;

module.exports.Createform=createForm;