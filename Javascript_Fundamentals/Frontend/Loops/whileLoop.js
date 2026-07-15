/* 
A while loop is used to repeat a block of code as long as a 
condition is true.

Unlike a for loop, a while loop is preferred when you 
don't know in advance how many times the loop should run.

Syntax
while (condition) {
    // Code to execute
}

check the condition.
If the condition is true, execute the code.
Update the variable.
Go back and check the condition again.
Stop when the condition becomes false.
*/

//Example 2: Print Even Numbers from 1 to 10 
let i=1;
while (i<=10){
    console.log(i+= 1);
    i++;
}

// Countdown
let i = 10;
while (i>=0){
    console.log(i);
    i--;
}
console.log("Launch!");

// 5 Multiplication Table

let i=0;
while(i<12){
    i++;
    console.log("5 x", i, "=", i*5 );
}

//multiples of 5

let i=1;
while(i<=100){
    i++;
    if(i%5==0){
        
        console.log(i);
    }
}

