const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.render('aaron');
});

router.get('/ia', (req, res) => {
  res.render('Ia');
});


module.exports = router;