// ---------------- Whale Talk --------------------
/*There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. */

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === 'e') {
        resultArray.push(input[i]);
        if (input[i] === 'u') {
          resultArray.push(input[i]);
        }
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
