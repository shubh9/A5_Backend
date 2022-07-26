const Recipe = require("./model");

function generateData() {
  // make a recipe
  const blondie = new Recipe({
    title: "Grandma's Blondies",
    ingredients:
      "1 cup unsalted butter melted (226g) \n 1 ¼ cup brown sugar* tightly packed (250g) \n ½ cup sugar (100g) \n 2 large eggs + 1 egg yolk room temperature preferred",
    instructions:
      "Preheat oven to 350F (175C) and line a 13x9 pan with parchment paper \n Combine melted butter and sugar in a large bowl and stir well. \n Add eggs, egg yolk, and vanilla extract and stir until completely combined. Set aside. \n In a separate bowl, whisk together flour, cornstarch, baking powder, and salt.",
    cookTime: "23",
  });
  // Save a recipe to db
  blondie.save();
}

module.exports = generateData;
