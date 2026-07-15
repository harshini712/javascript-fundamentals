  /*

  What is a do...while Loop?

A do...while loop is used to execute a block of code at least once, 
and then repeat it as long as the condition is true.

Key Difference: The condition is checked after the code runs.

Syntax
do {
    // Code to execute
} while (condition);

Notice the semicolon (;) after the while(condition).


Start
   ↓
Execute Code
   ↓
Check Condition
   ↓
True?
 ↓      ↓
Yes      No
 ↓        ↓
Repeat    Stop

*/

//even numbers 

let i=1;
do {
    console.log(i+=1);
    i++
}
while(i<10);

// atm pin verification

let atmPin =1234;
do{
    console.log("Verified Successfully");
    atmPin = 0;
}
while (atmPin===1234);