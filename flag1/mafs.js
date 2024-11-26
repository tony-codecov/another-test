function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 0;
  }
}

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { add, subtract, multiply, divide, sum };
