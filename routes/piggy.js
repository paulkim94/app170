/*
 * GET home page.
 */
 var data = require('../transaction.json');
 var total = 0;

exports.view = function(req, res){

  res.render('piggy', data);
};
