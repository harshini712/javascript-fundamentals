/*Unary = Works on ONLY ONE operand (one variable/value)
+  -> Unary Plus
      Converts value to a positive number.
-  -> Unary Minus
      Converts value to a negative number.
++ -> Increment
      Increases value by 1.
-- -> Decrement
      Decreases value by 1.
Pre (++a / --a)
→ Change first, then use.
Post (a++ / a--)
→ Use first, then change.*/

let a = 5;

console.log("Initial value:", a);

console.log("Pre Increment (++a):", ++a);

a = 5;
console.log("Post Increment (a++):", a++);
console.log("Value after Post Increment:", a);

a = 5;
console.log("Pre Decrement (--a):", --a);

a = 5;
console.log("Post Decrement (a--):", a--);
console.log("Value after Post Decrement:", a);  