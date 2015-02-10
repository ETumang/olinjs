var path = require('path')
var mongoose = require('mongoose');
var routes = {}

var ingredientSchema = mongoose.Schema({
	name : String,
	inStock : Boolean,
	price : Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

var makeIngredient= function(itemParams){
	var newIngredient = new Ingredient({name: itemParams.name, inStock:true, price:itemParams.price});
	newIngredient.save(function(err){
		if(err){
			console.log("Could not create that ingredient", err);
		}
	});
}

var showIngredients=function(req,res){
	Ingredient.find().sort().exec(function(err, ingredient_list){
		if(err){
			console.log("Could not find ingredients");
		}
		else{
			console.log("displaying")
			res.render("ingredients",ingredient_list);
		}
	});
}

routes.ingredientsGET = function(req, res){
  	if(req.xhr){
  		makeIngredient(req.query);
  		showIngredients(req,res);
  	}
  	else{
  		showIngredients(req,res);
  	}
};

module.exports = routes;
