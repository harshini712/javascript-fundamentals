//check if atleast 1 number in the array is divided by 5
const evenNumbers = [2,3,4,7,6]

const numEven = evenNumbers.some((num, i)=>{
    return num%5==0;
})
console.log(numEven)

//find the first number after 40

let numbers = [10, 25, 30, 45, 60];

let a =numbers.find((a)=> a>40)
console.log(a)

//Find the student named rahul

let students = [
  { name: "Asha", marks: 78 },
  { name: "Rahul", marks: 92 },
  { name: "Priya", marks: 85 }
];

let b = students.find((a)=>a.name = "Rahul")
console.log(b)

//check if atleast one number is even

let numbers1 = [11, 15, 19, 24, 31];

let evenNum = numbers.some((n)=>n%2==0)
console.log(evenNum)

//check if any product is greater than 50000
let products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 }
];
let expProd= products.some((item)=> item.price>50000)
console.log(expProd)

//check if everyone in the list is an adult
let ages = [22, 25, 19, 30, 18];

let adult = ages.every((age)=>age>=18);
console.log(adult)

//check if every number is positive
let numb = [5, 8, 12, -3, 20];

let positiveNum = numb.every((numb)=>numb>0);
console.log(positiveNum)


// //Find the employee named "Sara".
// Check whether any employee earns more than ₹60,000.
let employees = [
  { name: "John", salary: 30000 },
  { name: "Sara", salary: 70000 },
  { name: "David", salary: 45000 }
];
let emp= employees.find((employee)=>employee.name === "Sara")
console.log(emp)
let salary = employees.some((employee)=>employee.salary>60000);
console.log(salary)


// Find the user named "Charlie".
// Check if any user is inactive.
// Check if every user is at least 18 years old.

let users = [
  { name: "Alice", active: true, age: 25 },
  { name: "Bob", active: false, age: 17 },
  { name: "Charlie", active: true, age: 30 }
];

let user = users.find((user)=> user.name == "Charlie");
console.log(user)

let active = users.some((user)=>user.active == false);
console.log(active)
let adult1= users.every((user)=>user.age>=18);
console.log(adult1)