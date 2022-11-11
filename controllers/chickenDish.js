var chickenDish = require('../models/chickenDish'); 
 
// List of all dishes
exports.chickenDish_list = async function(req, res) { 
    try{ 
        dishes = await chickenDish.find(); 
        res.send(dishes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific dish.  
exports.chickenDish_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await chickenDish.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Handle dish create on POST. 
exports.chickenDish_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new chickenDish(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object
    document.dishName = req.body.dishName; 
    document.mainIngredient = req.body.mainIngredient; 
    document.dishPrice = req.body.dishPrice; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle dish delete form on DELETE. 
exports.chickenDish_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Chicken Dish delete DELETE ' + req.params.id); 
}; 
 
// Handle dish update form on PUT. 
exports.chickenDish_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await chickenDish.findById( req.params.id)
    // Do updates of properties
    if(req.body.dishName) toUpdate.dishName = req.body.dishName;
    if(req.body.dishPrice) toUpdate.dishPrice = req.body.dishPrice;
    if(req.body.mainIngredient) toUpdate.mainIngredient = req.body.mainIngredient;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
   }; 

// VIEWS 
// Handle a show all view 
exports.chickenDish_view_all_Page = async function(req, res) { 
    try{ 
        theDishes = await chickenDish.find(); 
        res.render('chickenDish', { title: 'Chicken Dish Search Results', dishResults: theDishes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 