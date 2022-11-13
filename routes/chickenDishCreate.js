var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();

/* GET create chickenDish page */
router.get('/create', chickenDish_controlers.chickenDish_create_Page);

module.exports = router;