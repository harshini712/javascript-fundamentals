let students = [
    {
        id: 101,
        name: "Praneeth",
        address: {
            city: "bengaluru",
            state: "karnataka"
        },
        marks: [87,89,86]
    },
    {
        id: 102,
        name: "Sreeja",
        address: {
            city: "hyderabad",
            state: "telangana"
        },
        marks: [86,89,85]
    },
    {
        id: 103,
        name: "Renuka",
        address: {
            city: "visakhapatnam",
            state: "andhra pradesh"
        },
        marks: [89,92,88]
    },
    {
        id: 104,
        name: "Pratyush",
        address: {
            city: "chandigarh",
            state: "punjab"
        },
        marks: [87,89,90]
    }
    ];
    
    do{
        console.log("==========Student Management Console=========")
    choice = Number(prompt(
        "1. Display Students\n"+
        "2. Total & Average\n"+
        "3. Highest Average\n"+
        "4. Add Student\n"+
        "5. Update Address\n"+
        "6. Delete Student\n"+
        "7. Scorers above 80\n"+
        "8. JSON string\n"+
        "9. JSON to Object\n"+
        "10. Final Object\n"+
        "Please choose an option: "));
        
        switch(choice){
            
        //student details
            
        case 1: console.log("Student details: ")
        for (let student of students){
        console.log(student)
        }
        break;
        
        //total and average
        case 2: 
            for(let student of students){
                let total =0;
                for (let mark of student.marks){
                total+=mark;
                }
               let average= total/student.marks.length;
               console.log("Name: ", student.name)
               console.log("Total: ",total)
               console.log("Average: ", average)
               console.log("--------------- ")
            }
            break;
        
        
        
        //highest average
        case 3: 
            let highest = 0;
            let topper;
            for (let student of students){
                let total =0;
                for(let mark of student.marks){
                    total+=mark;
                }
                let average = total/student.marks.length;
                
                if(average>highest){
                    highest = average;
                    topper= student.name;
                }
            }
            console.log("Topper: ",topper)
            console.log("Average: ",highest)
            break;
        
        
        //add a student
        case 4: 
            let id = Number(prompt("Enter the student's id: "));
            for (student of students){
            if (id===student.id){
                console.log("This id already exists.")
                break;
            }
            }
            let name = prompt("Enter the student's Name: ");
            let city = prompt("Enter the student's city: ");
            let state= prompt("Enter the student's state: ");
            let marks =[];
            
            for (let i=0; i<3; i++){
                marks.push(Number(prompt("Enter Marks: ")));
            }
            let newStudent = {
                id: id,
                name: name,
                address: {
                city: city,
                state: state
                },
                marks: marks
            };
            students.push(newStudent);
            console.log("Student Added Succesfully!");
            console.log(newStudent);
            break;
            
            
        //update address
        case 5: 
            let updateId = Number(prompt("Enter Student ID: "));
            let newCity = prompt("Enter the new city: ");
            let newState = prompt("Enter the new State: ");
            
            let found=false;
            for (let student of students){
                if (student.id===updateId){
                    student.address.city = newCity;
                    student.address.state = newState;
                    found=true;
                }
            }
            if (found){
                console.log("City Updated")
            }else {
                console.log("Student details not found");
            }
            break;
            
        //delete student
        case 6: 
            let deleteId = Number(prompt("Enter Student ID: "));
            let deleted = false;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === deleteId) {
                    students.splice(i, 1);
                    deleted = true;
                    break;
                }
            }
            if (deleted) {
                console.log("Student Deleted");
            } else {
                console.log("Student Not Found");
            }
        break;
        
        //average above 80
        case 7: 
            console.log("Students Average > 80");
            for (let student of students) {
                let total = 0;
                for (let mark of student.marks) {
                    total += mark;
                }
                let average = total / student.marks.length;
                if (average > 80) {
                    console.log(student.name, average);
                }
            }
            break;
            
        //obj to json 
        case 8: 
            let jsonData = JSON.stringify(students);
            console.log(`JSON String: 
            ${jsonData}`);
        break;
        
        //json to oobj
        case 9: 
            let jsonString = JSON.stringify(students);
            let obj = JSON.parse(jsonString);
            console.log("Parsed Object: ")
            console.log(obj)
        break;
        
        //final obj
        case 10:
            console.log("Final Object");
            console.log(students);
            break;
            
        default:
            console.log("Invalid Choice");
        }
}while(choice!=10);