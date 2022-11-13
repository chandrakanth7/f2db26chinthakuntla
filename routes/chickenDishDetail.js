var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();

/* GET home page. */
router.get('/detail', chickenDish_controlers.chickenDish_view_one_Page);

module.exports = router;