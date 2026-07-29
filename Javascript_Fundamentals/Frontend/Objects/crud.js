//exe 1- studet management system

let student= {
    rollNo: 12726,
    name: "Harshini",
    course: "CSE",
    cgpa: 7.38
}

console.log(`Name: ${student.name}
CGPA: ${student.cgpa}`)

student.cgpa= 7.65

console.log(`After update: 
Name: ${student.name}
CGPA: ${student.cgpa}`)
student.email = "Harshiniregu12@gmail.com"
delete student.course

console.log("Final object: ",student)


//online shopping order


let order= {
    orderId: 127,
    customer: "Sreeja",
    product: "iphone 17 pro max",
    amount: "100000"
    
}
console.log("Name: "+ order.customer +  "\nProduct: "+ order.product)
order.amount-=500;
order.deliveryStatus= "Pending";

delete order.product;

console.log("Final order details: ", order)


//sum
1:
let product = {
    name: "Perfume",
    price: 2500,
    quantity: 7
}

console.log("Total Bill: ", product.quantity*product.price)

2:
let marks= {
    english: 92,
    maths: 85,
    science: 88
}
let total=0;
for (i in marks){
    total+= marks[i]
}
console.log(total)

3:

let marks= {
    english: 92,
    maths: 85,
    science: 88
}
let total= Object.values(marks).reduce((a,b)=>{ 
    return (a+b);
})

console.log(total)


//update

let bankDetails= {
    accountId: 123456,
    accountHolder: "Harshini",
    balance: 12726,
    branch: "Gajuwaka"
}

bankDetails.balance-=5000;
console.log(bankDetails)

//conditions

let student = {
    name: "Harshini",
    marks: {
    english: 90,
    maths: 80,
    science: 95
    }
};
 let values= Object.values(student.marks)
let pass = true;

for (i in values){
    if(values[i]<35){
        pass = false;
    }
}
if (pass){
    console.log("PASS")
}else{
    console.log("FAIL")
}