const mongoose = require("mongoose")
const chickenDishSchema = mongoose.Schema({
dishName: String,
mainIngredient: String,
price: Number
})
module.exports = mongoose.model("ChickenDish",chickenDishSchema)