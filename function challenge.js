
// https://frontendmasters.com/courses/good-parts-javascript-web/

function identity(x){
  return x;
}

function add(a,b){
  return a + b;
}

function sub(a,b){
  return a - b;
}

function mul(a,b){
  return a * b;
}

function identityf(c){
  return function(){ return c };
}

function addf(a){
  return function(b){
    return a + b;
  }
}

function liftf(binaryfunction){
  return function(a){
    return function(b){
      return binaryfunction(a,b);
    }
  }
}

function curry(binaryfunction, arg1){
  return function(arg2){
    return binaryfunction(arg1, arg2);
  }
}

// Challenge: Find 3 ways to make Increment function without writing a new function

var incA = addf(1);
var incB = curry(add, 1);
var incC = liftf(add)(1);

// Crockford: "First rule of functional programming: Let the functions do 
// the work; if you have already written a function that does what you need, 
// you don't have to write another one."





