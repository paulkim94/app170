/*
 * GET transaction page
 */

var data = require("../transaction.json");

exports.view = function(req, res){
  res.render('transaction', data);
};

exports.addTransaction = function(req, res) {
	// Your code goes here
	var addedTransaction = {
		"date": req.query.date,
		"nameTransaction": req.query.nameTransaction,
		"category": req.query.category,
    "amount": req.query.amount
	};

	data["transactions"].push(addedTransaction);

	res.render('transaction', data);
  res.redirect('/transaction');

}

exports.deleteTransaction = function(req, res) {
}

exports.viewTransactions = function(req, res) {
  res.json(data);
}
