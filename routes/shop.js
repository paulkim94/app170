/*
 * GET shop page.
 */
var data = require("../shop.json");

exports.view = function(req, res){
  res.render('shop', data);
};
