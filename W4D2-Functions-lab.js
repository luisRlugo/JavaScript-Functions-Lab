// 1. Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.

// minusOne(10);        // 9
// minusOne(100);       // 99
// minusOne(Infinity);  // Infinity

function minusOne(num) {
  console.log(num - 1);
}
minusOne(10);
minusOne(Infinity);
minusOne(100);

console.log("==================================");

//2. Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.

// makeSentence('I', 'want', 'chimichangas');
// => 'Oh boy, do I want chimichangas or what?'
//function expression
const makeSentence = function (word1, word2, word3) {
  console.log("oh boy, do " + word1 + " " + word2 + " " + word3 + " or what?");
};

makeSentence("I", "want", "chimichangas");

//function declaration
// function makeSentence(word1, word2, word3) {
//   console.log("oh boy, do " + word1 + " " + word2 + " " + word3 + " or what?");
// }
// makeSentence("I", "want", "chimichangas");

console.log("==================================");

//3. Write a function called getLastElement that takes a parameter arr.
// Invoke the function with an array as the argument.
// The function should print the last element within the array.

// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
// Hint: arr[arr.length - 1]-->

function getLastElement(arr) {
  console.log(arr[arr.length - 1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement(["a", "b", "c"]);
getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]);
