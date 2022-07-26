const Recipe = require("./model");

const queries = {
  getAllRecipes: async function (filter) {
    const recipes = await Recipe.find(filter);
    return recipes;
  },
  deleteAllRecipes: async function (filter) {
    const recipes = await Recipe.deleteMany(filter);
    return recipes;
  },
  deleteOneRecipe: async function (filter) {
    console.log(filter);
    const recipes = await Recipe.deleteOne(filter);
    return recipes;
  },
};

module.exports = queries;
