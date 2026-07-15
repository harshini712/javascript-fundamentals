/*
Logical operators combine two or more conditions.

They always return: true or false

Operators:

&&  Logical AND
    Returns true only if BOTH conditions are true.

||  Logical OR
    Returns true if AT LEAST ONE condition is true.

!   Logical NOT
    Reverses the Boolean value.
    true becomes false
    false becomes true
    
    && opeator example*/

    let age = 20;
    isCitizen = true;

    cond1 = age >= 18;
    cond 2 = isCitizen = true;

    console.log("Eligible to vote: ", cond 1 && cond 2); //true

    /*|| operator example*/


let cartTotal = 450;
let premiumMember = true;

cond1 = cartTotal >= 500;
cond2 = premiumMember == true; //true

console.log("Free Delivery Applicable: ", cond1 || cond2);

//! operator example

let isLoggedIn = true;

console.log("Is Logged In: ", !isLoggedIn); //false