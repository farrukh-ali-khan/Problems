function ZeroesInFactorial(num) {
  var count = 0;
  for (var i = 5; num / i >= 1; i *= 5) {
    count += num / i;
  }
  return Math.round(count);
}

console.log(ZeroesInFactorial(15));
