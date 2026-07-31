let num1= Number(prompt("Enter 1st number: "));
let num2= Number(prompt("Enter 2nd number: "));
let operator = "Modulus"

switch (operator){
    case 'Addition':
        console.log(num1+num2);
        break;
    case 'Subtraction':
        console.log(num1-num2);
        break;
    case 'Multiplication':
        console.log(num1*num2);
        break;
    case 'Divison':
        console.log(num1/num2);
        break;
    default:
    console.log("Invalid operator entered");
}
