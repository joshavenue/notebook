function coffeeShop(drink, food){
	alert('I am going to get you ' + drink + " and " + food);
}

coffeeShop('soda', 'popcorn');

// this function does not need return as it does not
// require any feedback or calculation

// ________________________________________________________

// if there is something needed to be calculated or feedback required
// a Return is needed

function triangle(height, width){
	var areaTriangle = (1/2) * height * width;
	return areaTriangle;
}

alert(triangle(25, 25));
