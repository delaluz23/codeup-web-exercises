"use strict";
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    return("Hello, " + name);
}
alert(sayHello(prompt("What is your name?")))
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("jose");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
const random = Math.floor((Math.random() * 3) + 1);
let myName = "jose";
console.log(sayHello(myName));
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    return number === 2;
}
console.log("your random number is: " + random + " T/F if equals 2: " + isTwo(random))
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(TipPercentage, Bill){
    let tiptotal = Bill * (TipPercentage / 100) ;
    return"you should leave $" + tiptotal;
}
let TipPercentage = parseInt(prompt("What percent of tip would you like to leave?"));
let Bill = parseInt(prompt("whats the bill total?"));
alert(calculateTip(TipPercentage, Bill))
/**
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscont(price, discountPercentage){
    price = parseInt(prompt("What is the total cost of the product?"));
    discountPercentage =parseInt(prompt("what is the discount percentage?")) / 100;
    let discountPrice = price - (price * discountPercentage);
    return("You're discounted price is $" + discountPrice);
}
alert(applyDiscont())

//Make a function isOdd(number)

function isOdd(number){
    if(number % 2 !== 0){
        return"is odd"
    }
    else{
        return"isn't odd"
    }
}
 console.log(${random} + " " + isOdd(random));


//make a function named isEven(number)

function isEven(number){
    if(number % 2 === 0){
        return"is even"
    }
    else{
        return"isn't even"
    }
}

console.log(random + " " + isEven(random))



//make a function named identity(input) that returns the input exactly as provided

function identity(input){
    input = prompt("whats your identity");
    return"your identity = " + input;
}

console.log(identity());


//make a function named isFive(input)

function isFive(input){
    if (input === 5 || input === "five" || input === "Five" || input === "FIVE") {
        return "youre input " + input + " is five";
    } else {
        return "I told you i didn't care";
    }

}
let input = prompt("enter five or not i dont care");
console.log(isFive(input));


//make a function named addFive(input) that adds five to some input

let usernum = parseInt(prompt("give me a random number bozo"));

function addFive(input){
    return input + 5;
}

alert("wow i just added 5 to you're number and now you have -> " + addFive(usernum))



