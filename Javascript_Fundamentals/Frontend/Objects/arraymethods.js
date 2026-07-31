//map

let students = [

{name:"Harshini",cgpa:8.4},

{name:"Sreeja",cgpa:9.1},

{name:"Rahul",cgpa:7.6}

];

let names = students.map(function(student){

    return student.name;

});

console.log(names);

let updatedCgpa = students.map(function(student){

    return student.cgpa + 0.5;

});

console.log(updatedCgpa);



//filter 

let products = [

{name:"Laptop",price:65000},

{name:"Mouse",price:600},

{name:"Keyboard",price:1500},

{name:"Monitor",price:12000}

];

let expensive = products.filter(function(product){

    return product.price > 5000;

});

console.log(expensive);

//reduce

let products = [

{name:"Laptop",price:65000},

{name:"Mouse",price:600},

{name:"Keyboard",price:1500},

{name:"Monitor",price:12000}

];

let expensive = products.filter(function(product){

    return product.price > 5000;

});

console.log(expensive);