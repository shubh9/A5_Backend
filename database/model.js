const mongoose = require("mongoose");

// create schema
const recipeSchema = new mongoose.Schema(
  {
    title: String,
    ingredients: String,
    instructions: String,
    cookTime: String,
  },
  { typeKey: "$type" }
);

//sandwichSchema.methods.speak = function speak() {
//    console.log(`I'm a talking sandwich named ${this.name}`);
//}

// create model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
