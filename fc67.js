
function gensymf(letter){
  let counter = 1;
  return function(){
    let curcount = counter;
    counter++;
    return String(letter + curcount);
  }
}

// var geng = gensymf("G");
// console.log( geng() );
// console.log( geng() );
// console.log( geng() );
// console.log( geng() );
// console.log( geng() );


function fibonaccif(a,b){
  let numcall = 0;
  return function(){
    numcall++;
    if (numcall === 1) {
      return a;
    } else if (numcall === 2) {
      return b;
    } else {
      let newb = a + b;
      a = b;
      b = newb;
      return newb;
    }
  }
}

// var fib = fibonaccif(0, 1);

// console.log( 'should be 0: ', fib() );
// console.log( 'should be 1: ', fib() );
// console.log( 'should be 1: ', fib() );
// console.log( 'should be 2: ', fib() );
// console.log( 'should be 3: ', fib() );
// console.log( 'should be 5: ', fib() );
// console.log( 'should be 8: ', fib() );

// cleaner version presented by DC:

function fibonaccif_better(a,b){
  return function() {
    var next = a;
    a = b;
    b += next;
    return next;
  }
}


// Write a counter function that returns
// an object containing up and down 
// functions, hiding the actual counter.

function counter(count){
  return {
    up: function(){
      count++;
      return count;
    },
    down: function(){
      count--;
      return count;
    }
  }
}


function revocable(binaryfunction){
  let active = true;
  return {
    invoke: function(a,b){
      if (active){
        return binaryfunction(a,b);
      }
      return undefined;
    },
    revoke: function(){
      active = false;
    }
  };
}

function revocable_alt(binary){
  return {
    invoke: function(a,b){
      if(binary !== undefined){
        return binary(a,b);
      }
      return undefined;
    },
    revoke: function(){
      binary = undefined;
    }
  }
}




