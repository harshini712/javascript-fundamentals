//code to find factors of a number

let num= Number(prompt("Enter a number: "));
console.log("The factors of",num, "are: ")
for (let i=1; i<=num; i++){
    if (num%i==0){
        console.log(i)
    }
}

//Sum of Natural Numbers Using Recursion

let num= Number(prompt("Enter a number: "));
let sum=0;
for (i=1; i<=num; i++){
    sum +=i;
}
console.log(sum)

//guess a number
let targetNum = 8;
let guessedNum = 0;

while (guessedNum != targetNum){
    guessedNum = Number(prompt("Guess the number between 1 to 10: "));
    
    if (guessedNum === targetNum){
        console.log("Correct! You guessed it right");
    }else if (guessedNum>10){
        console.log("Enter a valid number between 1 to 50");
    }else if (guessedNum > targetNum + 5){
        console.log("Too High");
    }else if (guessedNum < targetNum - 5){
        console.log("Too Low");
    }else if (guessedNum>=targetNum-2 && guessedNum <targetNum){
        console.log("You are close. Try a little higher!");
    }else if (guessedNum<=targetNum+2 && guessedNum>targetNum){
        console.log("You are close. Try a little lower!");
    }else if (guessedNum>=targetNum-5 && guessedNum<=targetNum+5){
        console.log("You are within 5 numbers!")
    }else{
        console.log("Keep trying!");
    }
    
} 

//to shuffle a deck of cards
