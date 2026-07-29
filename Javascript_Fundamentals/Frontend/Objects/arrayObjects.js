let students = [

{name:"Harshini",cgpa:8.4},

{name:"Sreeja",cgpa:9.3},

{name:"Rahul",cgpa:7.8},

{name:"Ananya",cgpa:8.9}

];

let highest = students[0];

for(let student of students){

    if(student.cgpa > highest.cgpa){

        highest = student;

    }

}

console.log(highest);


//avg salary

let employees = [
    { name: "A", salary: 45000 },
    { name: "B", salary: 60000 },
    { name: "C", salary: 55000 },
    { name: "D", salary: 50000 }
];

let total = 0;

for (let employee of employees) {
    total += employee.salary;
}

let average = total / employees.length;

console.log("Average Salary:", average);



//eligibility for scholarship

let students = [
    { name: "Harshini", cgpa: 9.2 },
    { name: "Sreeja", cgpa: 8.1 },
    { name: "Rahul", cgpa: 9.5 },
    { name: "Ananya", cgpa: 7.8 }
];

for (let student of students) {

    if (student.cgpa >= 9) {
        console.log(student.name);
    }

}