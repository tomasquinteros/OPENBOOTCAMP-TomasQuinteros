function sum(a, b) {
  return a + b;
}

function rest(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function eleva(a, b) {
  return a ** b;
}

function factorial(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

module.exports = {
  sum,
  rest,
  multi,
  div,
  eleva,
  factorial
}