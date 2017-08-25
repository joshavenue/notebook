var myPlaces = ['korea', 'japan', 'iceland'];
var friendPlaces = ['denmark', 'norway', 'iceland'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {  // another for loop within a for loop //
        console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) { . // after running all the for loop, if statement is used to find the matching array //
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}
