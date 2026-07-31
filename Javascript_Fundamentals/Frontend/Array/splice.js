//push and splice

let cart =[];

cart.push("Milk", "Bread", "Rice", "Eggs", "Soap");
console.log(cart)
cart.splice(2,1,"Butter");
console.log(cart)

//
let flowers = ["rose", "Mango", "lily", "tulip", "Star Fruit"];
let fruits = ["Apple","Grapes", "Banana","Stone", "Orange","Sun Flower"];

flowers.splice(1,1)
flowers.splice(3,1)
console.log(`Flowers: ${flowers}`)

fruits.splice(3,1)
fruits.splice(4,1)
console.log("Fruits: ",fruits)

flowers.push("Sunflower")
fruits.push("Mango")
fruits.push("Star Fruit")

let fresh = flowers.concat(fruits)
console.log("Fresh: ",fresh)