//odd even
const num = Number(prompt("Enter a number: "));
if (num % 2 !==0){
    console.log(num "is an odd number");
} else {
    console.log(num, "is an even number");
}

//ternary operator 
const num = Number(prompt("Enter a number: "));
const result = (num%2==0) ? "even":"odd";
console.log(num, "is an", result, "number");

//largest num

const num1 = number(prompt("Enter the first number: "));
const num2 = number(prompt("Enter the second number: "));
const num3 = number(prompt("Enter the third number: "));

if (num1 > num2 && num1 >num3){
    console.log(`${num1} is the largest number`);
} else if (num2 > num1 && num 2> num3{
    console.log(`${num2} is the largest number`);
} else {
    console.log(`${num3} is the largest number`);
}

//prime number
const num = Number(prompt("Enter a number: "));
let isPrime = true;
if (num <=1){
    isPrime= false;
}
for (let i=2; i<num; i++){
    if (num%2===0){
        isPrime = false;
        break;
    }
}
if (isPrime){
    console.log(num,"is a Prime Number");
}else{
    console.log(num, "is not a prime number");
}

//prime numbers between 1 to 100

const num1 = Number(prompt("Enter starting number: "));
const num2 = Number(prompt("Enter ending number: "));

for (let i = num1; i<=num2; i++ ){
let count = 0;

for (let j=2; j<i; j++){
    if (i%j==0){
        count =1;
        break;
    }
}
if (i>1 && count ==0){
    console.log(i);
}
}

//
const num=Number(prompt("Enter a number: "));

if (num)
for(let i=)

//factorial
    let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);
