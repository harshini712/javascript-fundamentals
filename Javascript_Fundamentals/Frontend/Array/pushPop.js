// //push and pop => students

// let students = ['Pratyush', 'Sreeja', 'Renuka', 'Harshini', 'Praneeth'];

// students.unshift("Bhavishya");
// students.pop("Praneeth");

// console.log(students)
// console.log("Total number of students in the class: ",students.length)

// //flowers

// let flowers = ["rose", "lily", "tulip", "sunflower", "mogra"];

// flowers.push("nargis");

// console.log(flowers)

// console.log(flowers.toString())

// //add an element from the end
// let fruits = ["Apple", "Banana", "Orange"];
// fruits.push("mango");

// console.log(fruits)

// //remove an element from the end
// let cities = ["Delhi", "Mumbai", "Hyderabad", "Chennai"];
// cities.pop();

// console.log(cities)

// //add an element in the beginning
// let student = ["Sreeja", "Renuka", "Pratyush"];
// student.unshift("Harshini");

// console.log(student)

// //remove an element from the beginning
// let numbers = [10, 20, 30, 40];
// numbers.shift();
// console.log(numbers)

// //push and shift
// let arr = [];

// arr.push("A");
// arr.push("B");
// arr.push("C");

// arr.shift();
// console.log(arr)

// print [5,10,15]
let arr = [5,10,15,20,25,30];

 let x=arr.slice(0,3);
 console.log(x)
 arr.splice(3,2,5)
console.log(arr)

//
let queue = ["A", "B", "C", "D"];
queue.shift();
queue.push("E");
queue.unshift("VIP");

console.log(queue)


