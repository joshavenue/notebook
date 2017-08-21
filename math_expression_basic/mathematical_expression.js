//Show mathematical expression//
//This is my personal JS notebook for math.//


function naturalLogarithms(){
  return Math.E;
  console.log('Math.E is equal to 2.718281828459045')
}

function naturalLogarithmOf10(){
  return Math.LN10;
  console.log("Math.LN10 is equal to ln(10) appx to 2.302");
}

function naturalLogarithmOf2(){
  return Math.LN2;
  console.log('Math.LN2 is equal to ln(2) appx to 0.693');
}

function base_10_Logarithm_Of_E(){
  return Math.LOG10E;
  console.log('Math.LOG10E is equal to log^b10 (e) appx to 0.434');
}

function base_2_Logarithm_Of_E(){
  return Math.LOG2E;
  console.log('Math.LOG2E is equal to log^b2 (e) appx to 1.442');
}

function piCircle(){
  return Math.PI;
  console.log('Math.PI is equal to pi, which is appx 3.1412');
}

function squareRootOfHalf(){
  return Math.SQRT1_2;
  console.log('Math.SQRT1_2 is the square root of 1/2 appx to 0.707');
}

function squareRootOfTwo(){
  return Math.SQRT2;
  console.log('Math.SQRT2 is the square root of 2 appx to 1.414');
}

// Now come to Methods //

function absoluteNumber(){ //where x is any value, could be '5', '6' etc //
  var x = 5; // Any number //
  return Math.abs(x);
  console.log('Math.abs(x) returns any given value an absolute value');
  // Math.abs(-2);       // 2
  // Math.abs(null);     // 0
  // Math.abs('');       // 0
  // Math.abs([]);       // 0
  // Math.abs([2]);      // 2
  // Math.abs([1,2]);    // NaN
  // Math.abs({});       // NaN
  // Math.abs('string'); // NaN
  // Math.abs();         // NaN
}

function ArcCosine(){
  return Math.acos(x);
  console.log('Math.acos(x) returns the arc cosine of a number in radian. ');
// Usually the value between -1 and 1, other than the range of these numbers, it will return NaN. //
}

function HyperbolicArcCosine(){
  return Math.acosh(x);
  console.log('Math.acosh(x) returns the hyperbolic arc cosine of a number. ');
  // if number lesser than 1, it will be NaN //
}

function ArcSine(){
  return Math.asin(x)
  console.log('Math.asin(x) returns the arc sine of a number in radian ');
  // it usually returns a numeric value between -pi/2 and pi/2 radians for x between -1 and 1 //
}

function HyperbolicArcSine(){
  return Math.asinh(x);
  console.log('Math.asinh(x) returns the hyperbolic arc sine of a number in radian.');
}
