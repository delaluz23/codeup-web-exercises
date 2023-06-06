// function enterANumber(x){
//     while (x <= 50 || x>= 1){
//         if(x % 2 !== 0){
//             console.log(`your odd number is ${x}`);
//             break;
//         }
//         else{
//             console.log(`your number ${x} is between 1 - 50 but is not odd`)
//             enterANumber(parseInt(prompt("enter a odd number from 1 though 50")))
//             break;
//         }
//     }
//     while (x>50 || x<1){
//         console.log(`you're number "${x}" is not a number that meets the range`);
//         enterANumber(parseInt(prompt("enter a odd number 1 through 50")));
//         break;
//     }
// }
// enterANumber(parseInt(prompt("enter a odd number from 1 through 50")));
//
//
//
//
// function OddExceptOne (x){
//     while (x <= 50 || x>= 1){
//         if(x % 2 !== 0){
//             for (let i =1; i<50;i+=2){
//                 if(i === x){
//                     console.log(`Yikes! Skipping ${x}`)
//                     continue;
//                 }
//                 console.log(`Here is an odd number ${i}`)
//             }
//             break;
//         }
//         else{
//             console.log(`your number ${x} is between 1 - 50 but is not odd`)
//             OddExceptOne(parseInt(prompt("enter a odd number from 1 though 50  for a list of odd numbers")))
//             break;
//         }
//     }
//     while (x>50 || x<1){
//         console.log(`you're number "${x}" is not a number that meets the range`);
//         OddExceptOne(parseInt(prompt("enter a odd number 1 through 50  for a list of odd numbers")));
//         break;
//     }
// }
// OddExceptOne(parseInt(prompt("enter a odd number between 1 and 50 for a list of odd numbers")))