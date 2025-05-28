const express = require('express');
const router = express.Router();
// const controller = require('../controllers/index')
const {formatter}=require('../pruebas')

const{ia}=require('../main')





router.get('/',(req,res)=>{
    res.send("bienvenido")
});

router.get('/chat',(req,res)=>{
    res.render('chat')
});

router.get('/chat2',async (req,res)=>{
    var response =await  ia.procesarMensaje(req.query.message)
    console.log(req.query.message)

    res.send(response);
});

router.get('/marquetar',async (req,res)=>{

    var marqueta = await formatter(req.query.message)
    console.log(marqueta)

    res.send(marqueta);
        
  

   
});


router.get('/form',(req,res)=>{
    res.render('form')
});


// router.get('/subir-archivo',controller.index3);



// router.get('/google',controller.index4);




// router.get('/oauth2callback',controller.index5);

module.exports = router;