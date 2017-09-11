
// Write a 'from' function that produces
// a generator that will produce
// a series of values.

function from(start){
  return function(){
    return start++;
    // Crockford dislikes 'return start++' here, prefers:
    // var next = start;
    // start++;
    // return next;
  }
}


// Write a 'to' function that takes a genarator
// and an end value, and returns a generator that
// will produce numbers up to that limit.

function to(generatorfunction, end){
  return function(){
    let next = generatorfunction();
    if (next < end){
      return next
    }
    return undefined;
  }
}

// Write a 'fromTo' function that produces
// a generator that will produce values in a range.

function fromTo_firstTry(start, end){
  return function(){
    if (start < end){
      let next = start;
      start += 1;
      return next;
    }
    return undefined;
  }
}

// My first try violated the first rule of
// functional programming! Better way:

function fromTo(start, end){
  return to(from(start), end);
}


function element(arr, gen){
  return function(){
    let index = gen();
    return index !== undefined ? arr[index] : undefined;
  }
}


function elementModified( arr, gen = fromTo(0, arr.length) ){
  return function(){
    let index = gen();
    return index !== undefined ? arr[index] : undefined;
  }
}


function collect(genFunc, outputArr){
  return function(){
    let next = genFunc();
    if (next !== undefined){
      outputArr.push(next);
    }
    return next;
  }
}

function filter(genFunc, predicate){
  return function(){
    let val = null;
    while (val === null){
      let next = genFunc();
      if (next === undefined){
        val = undefined;
      }
      if (predicate(next)){
        val = next;
      }
    }
    return val;
  }
}

// let fil = filter(fromTo(0,8), x=>x%3===0);
// console.log( 'should be 0: ', fil() );
// console.log( 'should be 3: ', fil() );
// console.log( 'should be 6: ', fil() );
// console.log( 'should be und: ', fil() );

// Alternative ES6 version taking advantage of 
// tail recursion

function filterRecursive(genFunc, predicate){
  return function recur(){
    let val = genFunc();
    if (val === undefined || predicate(val)){
      return val
    }
    return recur();
  }
}

function concat(gen1, gen2){
  return function(){
    let val = gen1();
    if (val === undefined) {
      return gen2();
    }
    return val;
  }
}

// let con = concat(fromTo(0,3), fromTo(6,9));
// console.log( 'should be 0', con() );
// console.log( 'should be 1', con() );
// console.log( 'should be 2', con() );
// console.log( 'should be 6', con() );
// console.log( 'should be 7', con() );
// console.log( 'should be 8', con() );
// console.log( 'should be und', con() );

