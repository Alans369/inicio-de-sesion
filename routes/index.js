const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')
const controller3 = require('../controllers/index3')

router.get('/',controller.index);

router.get('/api',controller3.index);

module.exports = router;