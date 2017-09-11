
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

function twice(binaryfunction){
  return function(a){
    return binaryfunction(a,a);
  }
}

var doubl = twice(add);
var square = twice(mul);

function reverse(binaryfunction){
  return function(b,a){
    return binaryfunction(a,b);
  }
}

// alternative version of reverse using ES6
// this will work for any number of arguments
function reverse2(binaryfunction){
  return function( ...args ){
    return binaryfunction( ...args.reverse() );
  }
}

function composeu(unary1, unary2){
  return function(x){
    return unary2( unary1(x) );
  }
}

function composeb(binary1, binary2){
  return function(d, e, f){
    return binary2( binary1(d, e), f );
  }
}










