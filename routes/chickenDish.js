var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chickenDish', { title: 'Search Results Chicken Dish' });
});

module.exports = router;
