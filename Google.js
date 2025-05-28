
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

async function getToken(code){
    const {tokens} = await oauth2Client.getToken(code)
     oauth2Client.setCredentials(tokens);

    console.log(tokens.access_token)

    return tokens.access_token
}


module.exports.autenticacion=autenticacion;

module.exports.getToken=getToken;