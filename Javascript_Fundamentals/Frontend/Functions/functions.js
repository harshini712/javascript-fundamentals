/* A function is a block of code that performs a specific task. 
Instead of writing the same code again and again, you write it once 
inside a function and call it whenever you need it.

Real-life example

Think of a coffee machine.

You press a button.
The machine makes coffee.
Every time you press the button, it repeats the same process.

A function works the same way.

Syntax
function functionName() {
    // code to execute
}

Example:

function greet() {
    console.log("Hello!");
}

greet(); */



// welcome to js return values
function Welcome(){
    return "welcome to Javascript!";
}
console.log(welcome());



//vowel counter 

function countVowels(str){
    //"cookie", count=4
    let count =0;
    for(const char of str){
        const cha = char.toLowerCase();
        if(cha==="a"|| cha==="e" || cha==="i" || cha==="o" || cha==="u"){
            count++;
        }
    }
   return(count) ;
}
console.log(countVowels("cookies and cream"));

//studentDetails

function studentDetails(){
    const student= {
        name: "Harshini",
        college: "Chandigarh University",
        department: "BE_CSE"
    }
return student;
}
console.log(studentDetails());
    

// greet(name)

function greet(){
    return(`Hi, ${name}!`);
}
let name = "Harshini";
console.log(greet(name));

// function greet(name){
//     return "Hello "+ name+ "!";
// }

// console.log(greet("PRATYUSH"));

// console.log(greet("Sreeja"));



//addition of two numbers

let add = function(num1, num2){
    return (num1 + num2);
}
console.log(add(6,7));

// function add(a, b){
//     return (a+b)
// }
// let a = 8;
// let b =10
// console.log(add(a, b))


//even number finder

function isEven(num){
    if (num % 2==0){
    return "True";
    } else {
        return "False";
    }
}
console.log(isEven(12810726));

//square of a num
function square(num){
    return (num*num);
}
console.log(`Square of num : ${square(7)}`);


//to uppercase 

function toUpper(str) {
    return str.toUpperCase();
}

console.log(toUpper("hello"));