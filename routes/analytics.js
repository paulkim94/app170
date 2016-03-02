/*
 * GET analytics page.
 */
var data = require("../transaction.json");

exports.view = function(req, res){

  //console.log(data["transactions"]);

  var i;
  var spentMealsDrinks = 0;
  var spentNecessities = 0;
  var spentClothes = 0;
  var spentPersonal = 0;
  var spentEntertainment = 0;
  var spentTransportation = 0;

  // Loop through all transactions & find out how much is spent on each category
  for(i = 0; i < data["transactions"].length; i++) {
    if(data["transactions"][i].category == "Meals/Drinks") {
      spentMealsDrinks += Number(data["transactions"][i].amount);
      continue;
    }
    if(data["transactions"][i].category == "Necessities") {
      spentNecessities += Number(data["transactions"][i].amount);
      continue;
    }
    if(data["transactions"][i].category == "Clothes") {
      spentClothes += Number(data["transactions"][i].amount);
      continue;
    }
    if(data["transactions"][i].category == "Personal Care") {
      spentPersonal += Number(data["transactions"][i].amount);
      continue;
    }
    if(data["transactions"][i].category == "Entertainment") {
      spentEntertainment += Number(data["transactions"][i].amount);
      continue;
    }
    if(data["transactions"][i].category == "Transportation") {
      spentTransportation += Number(data["transactions"][i].amount);
      continue;
    }
  }

  var categories = {
    "mealsDrinks" : spentMealsDrinks,
    "necessities" : spentNecessities,
    "clothes" : spentClothes,
    "personal" : spentPersonal,
    "entertainment" : spentEntertainment,
    "transportation" : spentTransportation
  };

  res.render('analytics', categories);
};
