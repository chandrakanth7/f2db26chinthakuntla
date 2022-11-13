var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();

/* GET update chickenDish page */
router.get('/update', chickenDish_controlers.chickenDish_update_Page);

module.exports = router;