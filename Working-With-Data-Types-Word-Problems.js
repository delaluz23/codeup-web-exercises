/*
You have rented some movies for your kids:
The little mermaid (for 3 days),Brother Bear
(for 5 days, they love it),and Hercules
(1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

let priceperdaydollars =3;
let littlemermaiddaysrented = 3;
let brotherbeardaysrented = 5;
let herculesdaysrented = 1;

let price = priceperdaydollars* (littlemermaiddaysrented + brotherbeardaysrented + herculesdaysrented);
console.log("your total price to pay is $" + price)

/*
Suppose you're working as a contractor for 3 companies:
Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
 You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

let GooglePayPerHour = 400, AmazonPayPerHour = 380, FacebookPayPerHour = 350;
let HoursFacebook = 10, HoursGoogle = 6, HoursAmazon = 4;
let TotalPay = (HoursFacebook * FacebookPayPerHour) + (HoursAmazon * AmazonPayPerHour) + (HoursGoogle * GooglePayPerHour);
console.log(TotalPay);

/*
A student can be enrolled in a class only if the class is not full
and the class schedule does not conflict with her current schedule.
 */

let ClassFull = false;
let ConflictSchedule = false;
if(!ClassFull && !ConflictSchedule){
    console.log("you can't enroll :(")
}
else{
    console.log("you can be enrolled ")
}

/*
A product offer can be applied only if a person buys more than 2 items
, and the offer has not expired. Premium members do not need to buy
a specific amount of products.
 */
let OfferExpired = false;
if(!OfferExpired){
    let RegularMember = true;
    let ItemOffer = 2;
    let buys = prompt("how much items did you buy");
    parseInt(buys);
    if (RegularMember){
        if(buys >= ItemOffer){
            console.log("you are eligible for the product offer!")
        }else{
            console.log("You aren't eligible for the product off:(")
        }
    }
    if(!RegularMember) {
        console.log("You're a Premium Member and are eligible for the product offer")
    }
}else{
    console.log("the offer is expired")
}

