// Number Swapper: Write a function to swap a number in place (that is, without temporary variables).

function swapping(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return a, b;
}
