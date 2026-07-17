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



// welcome to js
function Welcome(){
    return "welcome to Javascript!";
}
console.log(welcome());



//vowel counter 

function countVowels(str){
    //"cookie", count=4
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}

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
    

