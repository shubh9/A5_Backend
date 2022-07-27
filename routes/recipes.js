var express = require("express");
// const { default: receipeList } = require("../../src/reducers/receipeList");
var router = express.Router();
const generateData = require("../database/gendat");
const queries = require("../database/queries");
const Recipe = require("../database/model");
const mongoose = require("mongoose");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("print")
  const getRecipes = async () => {
    await mongoose.connect("mongodb+srv://hi:bye@cluster0.3psn9.mongodb.net/test");
    var all = await queries.getAllRecipes({});
    if (all.length === 0) {
      console.log("empty recipe");
      generateData();
      console.log("added list");
      all = await queries.getAllRecipes({});
    }
    console.log(all);
    receipeList = all;
    res.send(receipeList);
  };
  getRecipes();
});

router.get("/fast", function (req, res, next) {
  const getRecipes = async () => {
    var all = await queries.getAllRecipes({ cookTime: 5 });
    console.log(all);
    receipeList = all;
    res.send(receipeList);
  };
  getRecipes();
});

router.get("/one", function (req, res, next) {
  const getRecipes = async () => {
    await mongoose.connect("mongodb+srv://hi:bye@cluster0.3psn9.mongodb.net/test");
    generateData();

    var all = await queries.getAllRecipes({});
    // if ((all = [])) {
    //   console.log("enpty recipes, added list");
    //   all = await queries.getAllRecipes({});
    // }
    console.log(all);
    receipeList = all;
    res.send(receipeList);
  };
  getRecipes();
});

/* Post receipes*/
router.post("/", function (req, res, next) {
  // if (!req.body.name.title) {
  //   return res.status(400).send({ message: "Recipe must exist" });
  // }
  const getRecipes = async () => {
    await mongoose.connect("mongodb+srv://hi:bye@cluster0.3psn9.mongodb.net/test");
    console.log(req.body.title);
    const recipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      cookTime: req.body.cookTime,
    });
    // Save a recipe to db
    await recipe.save();
    var all = await queries.getAllRecipes({});
    console.log(all);
    receipeList = all;
    res.send(receipeList);
  };
  getRecipes();
});

/* Delete receipe*/
router.delete("/", function (req, res, next) {
  const deleteRecipes = async () => {
    await mongoose.connect("mongodb+srv://hi:bye@cluster0.3psn9.mongodb.net/test");
    const delTitle = req.body.title;
    // const arg = { title: delTitle };
    // console.log(arg);
    await queries.deleteOneRecipe(delTitle);
    receipeList = await queries.getAllRecipes({});
    res.send(receipeList);
  };
  deleteRecipes();
});

/* Delete all receipe*/
router.delete("/all", function (req, res, next) {
  const deleteRecipes = async () => {
    await mongoose.connect("mongodb+srv://hi:bye@cluster0.3psn9.mongodb.net/test");
    await queries.deleteAllRecipes({});
    receipeList = [];
    res.send(receipeList);
  };
  deleteRecipes();
});

module.exports = router;
