/*
 * GET shop page.
 */
var data = require("../shop.json");

exports.view = function(req, res){
  res.render('shop', data);
};

exports.viewStoreItems = function(req, res) {
  res.json(data);
}

exports.getItemBuyID = function(req, res) {
  console.log(req.body);
  var itemObject = req.body;
  var itemId = req.body.ItemID;

  var i;

  for( i = 0; i < data["storeItems"].length; i++ ) {
    if( data["storeItems"][i].ItemID == itemId ) {
      console.log("I = " + i);
      data["storeItems"].splice(i, 1);
    }
  }

  res.render('shop', data);
  res.redirect('/shop');
};
