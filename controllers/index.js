
const llm =require('../controllers/client')



const index3 = async (req, res) => {
  const nombreArchivo = req.query.nombreArchivo;
  console.log("nombreArchivo", nombreArchivo);
  try {
    const response = await llm.Createform(nombreArchivo);

    console.log(response);
    res.send(response);
    
  } catch (error) {
    res.send(error)
    
  }

}

const index4 = async (req, res) => { 

  res.redirect(llm.login());

}

const index5 = async (req, res) => { 
  const code = req.query.code;
  try {
    const tokens = await llm.getAccessToken(code);
    
    console.log('Tokens obtenidos:', tokens);
    res.send(tokens);
  } catch (error) {
    res.send(error)
    
  }
}

  
  
  
  module.exports = {
    index3,
    index4,
    index5
    
  };