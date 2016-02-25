/*
 * GET home page.
 */
 var data = require('../transaction.json');
var total = 0;

exports.view = function(req, res){
/*  for(var i=0; i < data.length; i++) {
    var y = 0;
    var y = data[i].amount;
    var total += y;
  }

  window.alert(total);*/
  res.render('index', data);
};
