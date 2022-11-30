const mongoose = require("mongoose")
const chickenDishSchema = mongoose.Schema({
dishName: {
    type:String,
    required:true,
    minLength:0
},
mainIngredient: {String},
price: {
    type:Number,
    required:true,
    min:0,
    max:30
}
})
module.exports = mongoose.model("ChickenDish",chickenDishSchema)