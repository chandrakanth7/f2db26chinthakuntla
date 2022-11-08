var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();

/* GET home page. */
router.get('/', chickenDish_controlers.chickenDish_view_all_Page);

module.exports = router;
