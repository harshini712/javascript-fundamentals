//includes

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";

console.log(sentence.includes(word)); // true
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the  sentence`)


//replace
let str = "hi, how are you?"
console.log(str.replace("you", "you doing"))

//slice
let str1 = "Please give Rs.1000"
let amount = str.slice(0);
console.log(amount)
