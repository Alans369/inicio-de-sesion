const express = require('express');
const router = express.Router();


// aca pones tu ruta  por ejemplo /api
router.get('/', (req, res) => {
    // aca usas res.render('nombre del archivo de las vistas')
  res.render('aaron');
});

router.get('/ia', (req, res) => {
  res.render('Ia');
});


module.exports = router;