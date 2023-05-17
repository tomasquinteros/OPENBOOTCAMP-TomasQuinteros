export function sum(a, b) {
  return a + b;
}

export function rest(a, b) {
  return a - b;
}

export function multi(a, b) {
  return a * b;
}

export function div(a, b) {
  return a / b;
}

export function eleva(a, b) {
  return a ** b;
}

export function factorial(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}
