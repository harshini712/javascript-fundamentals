//23/07/26
Examples from 15 to 18;

//factorial of a number 

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);

// Multiplication table

let num=Number(prompt("Enter a number: "));

for(let i=1; i<=10; i++){
    console.log(num, "x", i ,"=", num*i);
}

//multiplication table upto range from user

let num=Number(prompt("Enter a number: "));

let range = Number(prompt("Enter a range"));

for(let i=1; i<=range; i++){
    console.log(num, "x", i ,"=", num*i);
}

//Fibanocci series
// A fibonacci sequence is written as:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// The Fibonacci sequence is the integer sequence where the 
// first two terms are 0 and 1. After that, the next term is defined 
// as the sum of the previous two terms.


let n = Number(prompt("Enter a number"));
let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}

// Armstrong number
// A positive integer is called an Armstrong number (of order n) if

// abcd... = an + bn + cn + dn + ...
// In the case of an Armstrong number of 3 digits, the sum of 
// cubes of each digit is equal to the number itself. For example, 
// 153 is an Armstrong number because
// 153 = 1*1*1 + 5*5*5 + 3*3*3

let n = 153;
let temp = n;
let digits = n.toString().length;
let sum = 0;

while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** digits;
    temp = Math.floor(temp / 10);
}

if (sum === n) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
