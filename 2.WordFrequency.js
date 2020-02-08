// Tells about word frequency in your given text.
function WordFrequency(text, findWord) {
  var i = 0;
  return "Your Word = "+findWord+"\nWord Frequency = "+parseInt(
    eval(
      text
        .split(" ")
        .map(txt => (txt.toLowerCase() === findWord.toLowerCase() ? i + 1 : i))
        .join("+")
    )
  );
}

// With Example
console.log(WordFrequency("Hello world hello hellO", "Hello"));
