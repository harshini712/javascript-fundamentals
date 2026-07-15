/* Comparison operators compare two values.

They always return a Boolean value:
true  -> Condition is true
false -> Condition is false

Comparison Operators:

==   Equal to
     Checks only the value.

===  Strict Equal to
     Checks both value and data type.

!=   Not Equal to
     Checks if values are different.

!==  Strict Not Equal to
     Checks both value and data type.

>    Greater Than

<    Less Than

>=   Greater Than or Equal To

<=   Less Than or Equal To */

/*prac que 1 Q1

Create two variables:
a = 10
b = 20
Check:
Is a greater than b?
Is a less than b? */

let a = 10;
let b = 20;

console.log("a > b: ", a > b);
console.log("a < b: ", a < b);


/*rac que 2 
age = 18
Check whether the person is eligible to vote. */

let minAge=18;
let currAge=18;

console.log("Eligibleto vote: ", minAge>=currAge);

/*prac que 3
marks = 75

Check if the student passed.

(Passing marks = 35)*/

let passingMarks = 35;
let obtainedMarks = 75;

console.log ("Student Passed: ", obtainedMarks>=passingMarks);
obtainedMarks= "obtainedMarks - 45";
      console.log ("Student Passed: ", obtainedMarks>=passingMarks);