var express = require('express');
const chickenDish_controlers= require('../controllers/chickenDish');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET home page. */
router.get('/', chickenDish_controlers.chickenDish_view_all_Page);
router.get('/create',secured, chickenDish_controlers.chickenDish_create_Page);
router.get('/delete',secured, chickenDish_controlers.chickenDish_delete_Page);
router.get('/detail',secured, chickenDish_controlers.chickenDish_view_one_Page);
router.get('/update',secured, chickenDish_controlers.chickenDish_update_Page);



module.exports = router;
