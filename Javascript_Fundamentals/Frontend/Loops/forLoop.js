/*for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}
    
syntax:

for (initialization; condition; update) {
}

Execution: 
Initialization
      ↓
Check Condition
      ↓
True?
  ↓      ↓
Yes      No
 ↓        ↓
Execute   Stop
 ↓
Update
 ↓
Back to Condition
    
*/

/*ex 1 A teacher needs to mark attendance for 50 students.

Task: Print:

Attendance marked for Student 1
Attendance marked for Student 2
...
Attendance marked for Student 50 */

for (let i=1; i<=50; i++){
    console.log("Attendance marked for Student", i);
}


/* Mobile Contacts

You have 25 contacts.

Task: Display every contact one by one */

let i=1;
console.log("Contacts: ");
for(let contact =1; contact<= 25; contact++){
    console.log(i++,".", "Contact no.", contact);
}


// 5 Multiplication table
for ( let x=1; x<=12; x++){
        console.log("5 x", x, "=", x*5);
}

//muliplication tables from 1 to 10

for (let i=1; i<=10; i++){
    console.log("Table of: ",i);
    for (let j=1; j<=12; j++){
        console.log(i, "x", j, "=", (i*j));
    }
    console.log("-----------------------");
}

// multiplication table of user's choice
let num = Number(prompt("Enter a Number: "));
for (i=1; i<=12; i++){
    console.log(num,"x",i,"=",num*i);
}