const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')



router.get('/',(req,res)=>{
    res.send("bienvenido")
});

router.get('/form',(req,res)=>{
    res.render('form')
});


router.get('/subir-archivo',controller.index3);



router.get('/google',controller.index4);




router.get('/oauth2callback',controller.index5);

module.exports = router;