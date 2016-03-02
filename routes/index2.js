/*
 * GET home page.
 */
var data = require('../transaction.json');
var design = require('../design.json');
var total = 0;

var date; // stores today's date in PST

exports.view = function(req, res){

  var dailySpending = 0;
  var today = date;
  var i;

  for(i = 0; i < data["transactions"].length; i++) {
    if(data["transactions"][i].date == today) {
      dailySpending += Number(data["transactions"][i].amount);
    }
  }

//  console.log("Daily Spending " + dailySpending);
  var spentJSON = {
    "spentToday" : dailySpending
  };

  res.render('index2', spentJSON);
};

/*exports.getDesign = function(req, res) {
  res.json(designData);
}*/

exports.getDate2 = function(req, res){
  date = req.body.date;
  var dailySpending = 0;
  var spentJSON = {
    "spentToday" : dailySpending
  };

  res.render('index2', spentJSON);
  res.redirect('/dashboard2');
};
