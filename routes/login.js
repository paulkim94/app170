/*
 * GET login page
 */

var data = require("../login.json")

exports.view = function(req, res){
  res.render('login', {});
};
