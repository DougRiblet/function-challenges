

function add(a,b){
  return a + b;
}

function sub(a,b){
  return a - b;
}

function mul(a,b){
  return a * b;
}

function twice(binaryfunction){
  return function(a){
    return binaryfunction(a,a);
  }
}

var doubl = twice(add);
var square = twice(mul);

function exp(input){
  if (Array.isArray(input)){
    return input[0](input[1],input[2]);
  } else {
    return input;
  }
}

function exp_mod(input){
  if (Array.isArray(input)){
    return input[0](exp_mod(input[1]),exp_mod(input[2]);
  } else {
    return input;
  }
}

// var nae = [
//   Math.sqrt,
//   [
//     add,
//     [square, 3],
//     [square, 4]
//   ]
// ];

// console.log( exp_mod(nae) )

// Write a function 'addg' that adds from many invocations,
// until it sees an empty invocation

function addg_firsttry(a){
  if (a === undefined){
    return undefined;
  } else if (typeof a === 'number'){
    if (total === undefined){
      var total = a;
    } else {
      total += a;
    }
    return function(b){
      if (b===undefined){ return total }
      return addg(b+total);
    };
  }
}

// Crockford solution using 'retursion',
//   when a function returns itself
// (Not to be confused with 'recursion',
//   when a function calls itself)

function addg(first){

  function more(next){
    if (next === undefined) {
      return first;
    }
    first += next;
    return more;
  }

  if (first !== undefined) {
    return more;
  }
}
// My notes: (a) if more than one number is
//   called -- ie, 'addg(3)(4)(7)()' -- then
//   variable 'first' becomes a running total;
// (b) there is an implied
//   'if (first === undefined) {return undefined}'
//   at the end of this addg function. 


// Write a function 'liftg' that will take a binary 
// function and apply it to many invocations
//   liftg(mul)() ==> undefined
//   liftg(mul)(1)(2)(6)() ==> 12

function liftg(op){
  if (op === undefined){ return undefined }

  function opfunc(total){
    if (total === undefined){ return undefined }

    function more(next){
      if (next === undefined) { return total }
      total = op(total, next);
      return more;
    }

    return more;
  }

  return opfunc;
}

// Write a function 'arrayg' that will build 
// an array from many invocations.

function arrayg(first){
  let answer = [];

  function more(next){
    if (next === undefined) {
      return answer;
    }
    answer.push(next);
    return more;
  }

  return more(first);
}


// Write a function 'continuize' that takes
// a unary function, and returns a function
// that takes a callback and an argument

function continuize(unary){
  return function(cb, val){
    return cb( unary(val) );
  }
}

// ES6 version for varying num of arguments
function continuize_any(any){
  return function(cb, ...vals){
    return cb( any(...vals) );
  }
}







