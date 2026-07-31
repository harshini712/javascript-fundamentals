// sum of all the elements in an array
let arr =[12, 5, 8, 20, 15];
let sum=0;

for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log("Sum of the numbers in the array: ", sum)


//Largest element in an array
let arr = [45, 78, 12, 99, 34];
let largestElement = arr[0];
for (let i=0; i<arr.length; i++){
    if (arr[i] > largestElement){
        largestElement = arr[i];
    }
}
console.log("Largest Element in the array: ", largestElement)

//Smallest Element in an array
let arr = [45, 78, 12, 99, 34];
let smallestElement = arr[0];
for (let i=0; i<arr.length; i++){
    if (arr[i] < smallestElement){
        smallestElement = arr[i];
    }
}
console.log("Smallest Element in the array: ", smallestElement)

//sum of the even numbers
let arr =[10,15,22,7,18,5];
let sum = 0;
for(let i=0; i<arr.length; i++){
    if (arr[i] % 2 ===0){
        sum += arr[i]
    }
}
console.log("Sum of the even numbers in the array: ", sum)

//Sum of the odd numbers in the array
let arr =[10,15,22,7,18,5];
let sum = 0;
for(let i=0; i<arr.length; i++){
    if (arr[i] % 2 !==0){
        sum += arr[i]
    }
}
console.log("Sum of the odd numbers in the array: ", sum)

//smallest and largest

let arr = [34, 2, 89, 56, 11, 90];
let smallest= arr[0];
let largest = arr[0];
for (let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
    if (arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log("Largest: ", largest)
console.log("Smallest: ", smallest)

//Difference between the largest and smallest elements
let arr = [45, 10, 80, 25, 60];
let smallest= arr[0];
let largest = arr[0];
for (let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
    if (arr[i]<smallest){
        smallest=arr[i];
    }
}
let diff = largest - smallest
console.log("Largest: ", largest)
console.log("Smallest: ", smallest)
console.log("Difference between the largest and smallest elements: ", diff)



//sum & average of an array

let marks = [85,97,44,37,76,60]
let sum = 0;
for (let i=0; i<marks.length; i++){
    sum+=marks[i];
}
console.log(`Sum of the marks: ${sum} `)
let average = sum/marks.length;
console.log(`Average marks of the class: ${average}`)

//discount of 10% on every item's price

let prices =[250, 645, 300, 900, 50];

for (let i=0; i<prices.length; i++){
    let discount = (prices [i]* 10)/100;
    prices[i]= prices[i]-discount;
}
console.log(prices)

let arr = [25, 40, 15, 60, 80, 35, 10];
let sum =0;
let countEven = 0;
let countOdd = 0;
let largest = arr[0];
let smallest = arr[0];
let average;

for (let i=0; i<arr.length; i++){
   sum += arr[i];
   if(arr[i]>largest){
       largest = arr[i];
   }
   if(arr[i]<smallest){
       smallest=arr[i];
   }
   if (arr[i]%2==0){
       countEven++
   }else{
       countOdd++
   }
}

average = sum/arr.length;

console.log(`Sum of all elements: ${sum}
Largest element: ${largest}
Smallest element: ${smallest}
Average: ${average}
Count of even numbers: ${countEven}
Count of odd numbers: ${countOdd}`)

