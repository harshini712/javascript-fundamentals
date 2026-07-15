/*

The else if statement is used when
there are MULTIPLE conditions to check.

JavaScript checks the conditions
from TOP to BOTTOM.
Syntax:

if (condition1) {
    // Executes if condition1 is true
}
else if (condition2) {
    // Executes if condition2 is true
}
else if (condition3) {
    // Executes if condition3 is true
}
else {
    // Executes if all conditions are false
} */

//example 1:

let marks = 88;

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 75) {
    console.log("Grade A");
}
else if (marks >= 50) {
    console.log("Grade B");
}
else if (marks >= 35) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}