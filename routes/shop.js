/*
 * GET shop page.
 */

exports.view = function(req, res){
  res.render('shop', {"storeItems": [
		{
			"ItemName": "Blue Shades",
			"ItemThumbnail": "../images/blue-shades-thumbnail.png",
			"ItemImage": "../images/blue-shades.png",
			"ItemPrice": 10,
			"ItemID" : "item0",
			"ModalTarget": "#item0modal",
			"ModalId": "item0modal"
		},
		{
			"ItemName": "Gold Shades",
			"ItemThumbnail": "../images/gold-shades-thumbnail.png",
			"ItemImage": "../images/gold-shades.png",
			"ItemPrice": 10,
			"ItemID" : "item1",
			"ModalTarget": "#item1modal",
			"ModalId": "item1modal"
		}
	]});
};
