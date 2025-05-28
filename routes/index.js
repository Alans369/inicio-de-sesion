const express = require('express');
const router = express.Router();
const {autenticacion,getToken} = require('../Google')
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



router.get('/google',(req,res)=>{
    
    res.redirect(autenticacion())

});




router.get('/oauth2callback',async (req,res)=>{
     const { code } = req.query;

     try {
        
        var token = getToken(code)

        res.cookie('Token', token);
        res.redirect('/chat')
     } catch (error) {
        res.send('error')
        
     }

});

module.exports = router;