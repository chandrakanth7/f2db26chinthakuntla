var express = require('express'); 
var router = express.Router(); 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var chickenDish_controller = require('../controllers/chickenDish'); 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Dishes ROUTES /// 
 
// POST request for creating a dish.  
router.post('/chickenDish', chickenDish_controller.chickenDish_create_post); 
 
// DELETE request to delete Dish. 
router.delete('/chickenDish/:id', chickenDish_controller.chickenDish_delete); 
 
// PUT request to update Dish. 
router.put('/chickenDish/:id', chickenDish_controller.chickenDish_update_put); 
 
// GET request for one Dish. 
router.get('/chickenDish/:id', chickenDish_controller.chickenDish_detail); 
 
// GET request for list of all Dish items. 
router.get('/chickenDish', chickenDish_controller.chickenDish_list); 
 
module.exports = router; 