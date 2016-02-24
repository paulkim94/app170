/*
 * GET transaction page
 */

var data = require("../transaction.json");
var id = 0;

exports.view = function(req, res){
  res.render('transaction', data);
};

exports.addTransaction = function(req, res) {
	// Your code goes here
	var addedTransaction = {
    "transactionID": id++,
		"date": req.query.date,
		"nameTransaction": req.query.nameTransaction,
		"category": req.query.category,
    "amount": req.query.amount
	};

	data["transactions"].push(addedTransaction);

	res.render('transaction', data);
  res.redirect('/transaction');

}

exports.deleteTransactions = function(req, res) {

  //data["transactions"][1].pop();
  //var lastClickedID = localStorage.getItem("clickedId");

  //data["transactions"][lastClickedID].splice(lastClickedID, 1);
  /*for(i = 0; i < data["transactions"].length; i++) {
    if( data["transactions"][i].transactionID == lastClickedID ) {
      data["transactions"].splice(i, 1);
    }
  }*/

  //if( data["transactions"][0].transactionID == 0 ) {
  //  data["transactions"].splice(0, 1);
  //}

  res.render('transaction', data);
  res.redirect('/transaction');
}

exports.viewTransactions = function(req, res) {
  res.json(data);
}
