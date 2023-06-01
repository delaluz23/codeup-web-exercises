"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



// function analyzeColor(colorInput){
//     if(colorInput === "red"){
//         console.log("strawberries are red");
//     }else if(colorInput === "blue"){
//         console.log("blue is the color of the sky");
//     }else if(colorInput === "purple"){
//         console.log("grimace is purple");
//     }else if(colorInput === "yellow"){
//         console.log("don't eat yellow snow");
//     }else if(colorInput === "pink"){
//         console.log("some flamingos are pink");
//     }else{
//         return `idk anything about ${colorInput}`;
//     }
// }

// let color = prompt("Enter your favorite color");
// analyzeColor(color);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(`you're random color is ${randomColor} and ${analyzeColor(randomColor)}!`)




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


switch (randomColor){
    case "red":
        console.log("strawberries are red");
        break;
    case "blue":
        console.log("blue is the color of the sky");
        break;
    case "yellow":
        console.log("dont eat yellow snow");
        break;
    case "green":
        console.log("green is the color of grass");
        break;
    default:
        console.log("idk about " + randomColor);
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
(function analyzeColor(colorInput){
    let color = prompt("Enter your favorite color");
    if(color === "red"){
        alert("strawberries are red");
    }else if(color === "blue"){
        alert("blue is the color of the sky");
    }else if(color === "purple"){
        alert("grimace is purple");
    }else if(color === "yellow"){
        alert("don't eat yellow snow");
    }else if(color === "pink"){
        alert("some flamingos are pink");
    }else{
        alert(`idk anything about ${color}`);
    }
})()

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(LuckyNumber, price){
   let TotalDiscount;
   if(LuckyNumber === 0){
       TotalDiscount = (price - (0));

       alert(`You're lucky number is ${LuckyNumber} and you recieve %0 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else if(LuckyNumber === 1){
       TotalDiscount = (price - (price * .1));
       alert(`You're lucky number is ${LuckyNumber} and you recieve %10 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else if(LuckyNumber === 2){
       TotalDiscount = (price - (price * .25));
       alert(`You're lucky number is ${LuckyNumber} and you recieve %25 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else if(LuckyNumber === 3){
       TotalDiscount = (price - (price * .35));
       alert(`You're lucky number is ${LuckyNumber} and you recieve %35 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else if(LuckyNumber === 4){
       TotalDiscount = (price - (price * .5));
       alert(`You're lucky number is ${LuckyNumber} and you recieve %50 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else if(LuckyNumber === 5){
       TotalDiscount = (price - price);
       alert(`You're lucky number is ${LuckyNumber} and you recieve %100 off. You're total is $${TotalDiscount}. You're original price is $${price}`);
   } else {
       alert(`you're luck number '${LuckyNumber}' is not valid`)
   }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let Totalbill = parseInt(prompt("What is your total bill?"))
calculateTotal(luckyNumber, Totalbill);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


function MathStuff(number){
    if (number % 2 === 0){
        alert("You're number is even steven")
        alert(`You're number :${number} + 100 = ${number + 100}`)
        if(number > 0){
            alert(`You're number ${number} is a positive number`)
        } else if (number < 0){
            alert(`You're number ${number} is a negative number`)
        }else {
            alert("You're number is 0")
        }
    } else {
        alert("You're number is odd todd")
        alert(`You're number :${number} + 100 = ${number + 100}`)
        if(number > 0){
            alert(`You're number ${number} is a positive number`)
        } else if (number < 0){
            alert(`You're number ${number} is a negative number`)
        }else {
            alert("You're number is 0")
        }
    }
}

function Prompt(confirmation){
    if(confirmation){
        let number = parseInt(prompt("Enter a number"))
            if(number === String){
                alert("That is not a number dude")
            }
        return MathStuff(number);
    }else{
        alert(window.open("https://www.youtube.com/watch?v=eZUR1SSNj6g", "_blank"))
    }
}
Prompt(confirm("Do you want to enter a number?"))










