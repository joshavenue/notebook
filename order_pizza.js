var orderCount = 0;

function takeOrder(topping, crustType){
  console.log('Order: pizza with ' + topping + ' that comes along with ' + crustType);
  return orderCount += 1;
}

takeOrder('Bacon', 'Cheesy crust');
takeOrder('chicken', 'Nut crust');
takeOrder('fish', 'dem crust');

function getSubTotal(itemCount){
  return itemCount * 7.5;
  
}

console.log(getSubTotal(orderCount));

// a reminder of how functions are passed //
