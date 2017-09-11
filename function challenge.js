
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
  // return identity(c);
}

function addf(a){
  return function(b){
    return a + b;
  }
}



