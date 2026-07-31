
// Create this object:
// Convert it into a JSON string and print it.
let student = {
    name: "Rahul",
    age: 21,
    city: "Hyderabad"
}
let jsonData= JSON.stringify(student)
console.log(jsonData)
console.log(typeof jsonData)





// Convert it into an object and print:
// Samsung
// 25000
let data = '{"brand":"Samsung","price":25000}';
let product = JSON.parse(data)
console.log(product)
console.log(typeof product)
console.log(product.brand)
console.log(product.price)



// Convert it into JSON.
// Convert the JSON back into an object.
// Print the book title.
let book = {
    title: "JavaScript",
    author: "John",
    price: 500
};
let jsonData = JSON.stringify(book)
let lang= JSON.parse(jsonData)
console.log(lang.title)



//Convert the object into JSON and print:
// JSON string
// Length of the JSON string

let student = {
    name: "Anjali",
    marks: 95,
    city: "Delhi"
};

let jsonData = JSON.stringify(student)

console.log(jsonData)
console.log(jsonData.length)


//Convert the json tect into an object 
//change the course 
//re convert it into json and print final text

let jsonData = '{"name":"Amit","age":22,"course":"JavaScript"}';

let student = JSON.parse(jsonData)

student.course = "React"

jsonData = JSON.stringify(student)
console.log(jsonData)