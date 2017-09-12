
function m(value, source){
  if (source === undefined) { source = String(value) }
  return { value, source };
}

function addm_firsttry(m1, m2){
  let value = m1.value + m2.value;
  let source = `(${m1.source}+${m2.source})`;
  return { value, source };
}

function addm(m1, m2){
  return m(m1.value+m2.value, `(${m1.source}+${m2.source})`);
}

function liftm(binaryfunc, opstring){
  return function(m1, m2){
    return m(
      binaryfunc(m1.value, m2.value),
      `(${m1.source}${opstring}${m2.source})`
    );
  };
}

function liftm_mod(binaryfunc, opstring){
  return function(x1, x2){
    if (typeof x1 === 'number'){ x1 = m(x1) }
    if (typeof x2 === 'number'){ x2 = m(x2) }
    return m(
      binaryfunc(x1.value, x2.value),
      `(${x1.source}${opstring}${x2.source})`
    );
  };
}
