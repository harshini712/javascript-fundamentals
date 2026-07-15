/*The if...else statement is used when
there are TWO possible outcomes.

If the condition is true,
the if block executes.

If the condition is false,
the else block executes.

Syntax:

if (condition) {
    // Executes if condition is true
}
else {
    // Executes if condition is false
}
*/

//example 1: 

let mode = "dark";
let color;

if (mode == "dark"){
    color = "black";

} else {
    color = "white";
};
console.log("color: ", color);

//example 2:

let age = 17;

if (age >= 18){
    console.log("eligible to vote");
} else {
    console.log("Not Eligible to Vote");
};
age = age + 2;

console.log("Eligible to vote: ", age);

//ex 3

let a = 556;
if(a%5==0){
    console.log(a, "is a multiple of 5");
} else {
    console.log(a, "is not a multiple of 5");
};