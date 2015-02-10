var path = require('path');

var routes = {};

var makeList = function(req,res){
	Order.find().exec(function(err,orders){
		if(err){
			console.log("Could not get order list");
		}
		res.render("kitchen", orders)
	}
}


var routes.kitchenGET = function(req, res) {
  
};