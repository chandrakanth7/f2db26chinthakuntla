var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();

/* GET delete chickenDish page */
router.get('/delete', chickenDish_controlers.chickenDish_delete_Page);

module.exports = router;