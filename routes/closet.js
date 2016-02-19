/*
 * GET closet page.
 */
var data = require("../closet.json");

exports.view = function(req, res){
  res.render('closet', data);
};
