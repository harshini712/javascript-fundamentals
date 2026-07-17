/*

Variables in JavaScript are used to store data values. 
They can be declared in different ways depending on how the value should behave.

Variables can be declared using var, let, or const.
JavaScript is dynamically typed, so types are decided at runtime.
You don’t need to specify a data type when creating a variable.


// Old style
var a = 10    
​
// Prferred for non-const
let b = 20;    
​
// Preferred for const (cannot be changed)
const c = 30;  

Declaring Variables in JavaScript
Before ES6 (2015): Variables were declared only with var, which is function-scoped & global-scoped, 
causing issues like hoisting and global pollution.

ES6:let and const were introduced to provide safer alternatives for declaring variables.

Scope: let and const are block-scoped (limited to { } block) or global-scoped, 
reducing errors compared to var.


1. var keyword
var is a keyword in JavaScript used to declare variables and it is Function-scoped 
and hoisted, allowing redeclaration but can lead to unexpected bugs.


var a = "Hello Geeks";
var b = 10;
console.log(a);
console.log(b);


2. let keyword
let is a keyword in JavaScript used to declare variables and it is Block-scoped and 
not hoisted to the top, suitable for mutable variables

let a = 12
let b = "gfg";
console.log(a);
console.log(b);



 3. const keyword
const is a keyword in JavaScript used to declare variables and it is Block-scoped, 
immutable bindings that can't be reassigned, though objects can still be mutated.

const a = 5
let b = "gfg";
console.log(a);
console.log(b);