/*
 * GET home page.
 */
 var data = require('../transaction.json');

exports.view = function(req, res){
  res.render('index', data);
};
