/*
 * GET closet page.
 */
var data = require("../closet.json");

exports.view = function(req, res){
  console.log(req.body.ItemID);

  if(req.body.ItemID != null) {
    data["closetItems"].push(req.body)
  }

  res.render('closet', data);
};
