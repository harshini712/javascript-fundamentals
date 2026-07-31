let employee = {
    id: 101,
    name: "Sreeja",
    department: "IT",
    salary: 50000,
    experience: 5
};

if (employee.experience >= 5) {
    employee.salary += employee.salary * 0.10;
}

employee.email = "sreeja@gmail.com";

delete employee.department;

console.log(employee);