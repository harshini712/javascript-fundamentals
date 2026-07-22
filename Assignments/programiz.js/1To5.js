//1.hello world

console.log("Hello World!");

//using alert:

alert("Hello World!");

//using document.write()

document.write("Hello World!");

//2. area of a triangle

const height = 5;
const base = 3;
const area = (base*height)/2;

console.log("Area of the triangle: ",area);

//user's input;

const base = Number(prompt("Enter the base of your triangle: "));
const height = Number(prompt("Enter the height of your triangle: "));

const area = (base*height)/2;

console.log("Calculated area of the triangle: ", area);

//3. square root

const num=64;
const squareRoot = num ** 0.5;

console.log("Square root of", num,":", squareRoot);

//using method

const number = 64;
const result = Math.sqrt(64);

console.log(`Square root of ${number} is: ${result} `);

//4. add two numbers

const a = 26;
const b = 12;
const sum = a+b;

console.log(`The sum of ${a} & ${b} is: ${sum}`);

//user's input

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

const sum = num1+num2;

console.log(`Sum of ${num1} and ${num2} is: ${sum}`);