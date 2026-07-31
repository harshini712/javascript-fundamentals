//ATM withdrawl


let balance = 25000;
let withdraw = 15000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance);
}
else {
    console.log("Insufficient Balance");
}


//login

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}

//calculator
let marks = 85;

if (marks >= 35) {
    console.log("Pass");
}

if (marks >= 90) {
    console.log("Grade A");
}

if (marks >= 75 && marks < 90) {
    console.log("Grade B");
}

if (marks >= 60 && marks < 75) {
    console.log("Grade C");
}

if (marks >= 35 && marks < 60) {
    console.log("Grade D");
}

if (marks < 35) {
    console.log("Fail");
}

