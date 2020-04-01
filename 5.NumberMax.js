// Number Max: Write a method that finds the maximum of two numbers. You should not use if-else or any other comparison operator.

function NumberMax(num1, num2) {
  return (num1 + num2 + Math.abs(num1 - num2)) / 2;
}

// For testing
console.log(NumberMax(3, 2));
console.log(NumberMax(10000, 32000000000000));
console.log(NumberMax(-3, 2));
console.log(NumberMax(3, -2));
