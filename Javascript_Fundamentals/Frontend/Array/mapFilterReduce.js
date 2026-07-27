
//
let products = [
  { name: "Laptop", price: 60000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "Monitor", price: 12000, inStock: true }
];

let newProd= products
.filter((n)=> n.inStock)
.map((n)=> n.price)
console.log(newProd)

let total2 = newProd.reduce((n,m)=>n+m);

console.log("Total: ", total2)


// //map
 let arr = [26, 12, 24]
 
 let a = arr.map((value, index)=>{
     console.log(value,index)
     return value +1
 })
 console.log(a)


//Filter: filters an array with values that passes a test or a condition passed
//returns an array

let arr2 = [52,13,14,15,61,27];
let a2 = arr2.filter((n)=>{
    return n>20
})
arr2.map
console.log(a2)
console.log(arr2)

//Reduce: returns a value, 
let arr3=[1,2,3,4,5]
let newArr3= arr3.reduce((a, b)=>{
    return a*b
})
console.log(newArr3)


//map() – Double the Numbers

let numbers2 = [2, 4, 6, 8, 10];

let doubleNum = numbers2.map((n)=>{
    return n*2
})
console.log(doubleNum)

//fruits to uppercase
let fruits1 = ["apple", "banana", "mango", "orange"];

let upperCase = fruits1.map((items)=>{
   return items.toUpperCase()
})
console.log(upperCase)

// fruits to uppercase using arrow func

let fruits = ["apple", "banana", "mango", "orange"];

let upperCase1 = fruits.map(items => items.toUpperCase());
   
console.log(upperCase1)

//filter for even numbers
let numbers1 = [11, 22, 33, 44, 55, 66, 77];
 
 let evenNum = numbers1.filter((n)=>{
   return n % 2 ==0;
 })
 console.log(evenNum)
 console.log(numbers1)

 //long words

 let words = ["pen", "notebook", "book", "computer", "ink"];

let longWords = words.filter((n)=>{
    return n.length >4
})
console.log(longWords)

//sum of the numbers in an array
let marks = [75, 82, 91, 68, 88];

let total1 = marks.reduce((a,b)=>{
    return a+b;
})
console.log(total1)

//largest element

let numbers = [14, 56, 21, 89, 43];

let largest = numbers.reduce((a,b)=>{
    if (a>b){
        return a;
    }else {
        return b;
    }
})
console.log(largest)

// return ages of 18 and above and double them
let ages = [12, 18, 20, 15, 30];

let newArr = ages
.filter((a)=> a>=18)
.map((a)=> a*2);

console.log(newArr)


// filter() + map() + reduce() (Dataset Transformation)
// Keep employees whose salary is 40,000 or more.
// Extract only their salaries.
// Find the total salary.

let employees = [
  { name: "Asha", salary: 30000 },
  { name: "Rahul", salary: 50000 },
  { name: "Priya", salary: 45000 },
  { name: "Kiran", salary: 25000 }
];

let empNew = employees
.filter((a)=> a.salary>40000)
.map((a)=> a.salary);
console.log(empNew)

let total = empNew.reduce((a,b)=> a+b);
console.log("Total: ", total)