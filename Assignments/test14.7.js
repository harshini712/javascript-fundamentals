14/07/2026

/*Task 1: Operators
Calculator Using Operators
Take two numbers as input.
Perform addition, subtraction, multiplication, division, and modulus.
Display the results clearly.
Example:
Input: 10, 5

Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
Modulus: 0 */

let a=10;
let b=5;

let addition=a+b;
let subtraction=a-b;
let multilication=a*b;
let division=a/b;
let modulus=a%b;
let exponentiation=a**b;

console.log("addition: ", a+b);
console.log("subtraction: ", a-b);
console.log("multiplication: ", a*b);
console.log("division: ", a/b);
console.log("modulus: ", a%b);
console.log("exponentitation: ", a**b);

/*Task 2: Conditions
Student Grade Calculator
Take a student's marks as input.
Display the grade based on the marks:
90–100 → A
80–89 → B
70–79 → C
60–69 → D
Below 60 → Fail
Bonus: Validate that marks are between 0 and 100. */

let studentMarks=85;

if(studentMarks>=90 && studentMarks<=100){
    console.log("Student's Grade: A");
} else if (studentMarks>=80 && studentMarks<=89){
    console.log("Student's Grade: B");
} else if (studentMarks>=70 && studentMarks<=79){
    console.log("Student's Grade: C");
} else if (studentMarks>=60 && studentMarks<=69){
    console.log("Student's Grade: D");
} else if (studentMarks<60 && studentMarks>=0){
    console.log("Student's Grade: Fail");
} else {
    console.log("Invalid marks. Please make sure the marks are between 0-100.");
};