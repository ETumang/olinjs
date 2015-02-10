var $ingredient_add = $("#ingredient-add");


var onSuccess = function(data, status){
	console.log("Did a thing!");
};

var onError = function(data, status){
	console.log("Couldn't do the thing.");
};

console.log("Hello");

$ingredient_add.submit(function(event){
	event.preventDefault();
	var name = $ingredient_add.find("[name='name']").val();
	var price = $ingredient_add.find("[price='price']").val();
	$.get("ingredients", {
		name:name,
		price:price
	}).done(onSuccess).error(onError);

});