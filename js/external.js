console.log("Hello from external JavaScript");
alert("Welcome to my Website");
let FavColor = prompt("Whats your favorite color");
alert("Great " + FavColor + " is my favorite color too");

/*
You have rented some movies for your kids:
The little mermaid (for 3 days),Brother Bear
(for 5 days, they love it),and Hercules
(1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

let priceperdaydollars = prompt( "how many dollars per day to rent movies?");
let littlemermaiddaysrented = prompt("how many days you rented litte mermaid?");
let brotherbeardaysrented = prompt("how many days rented brother bear?");
let herculesdaysrented = prompt("how many days rented hercules");

let price = parseInt(priceperdaydollars)* (parseInt(littlemermaiddaysrented) + parseInt(brotherbeardaysrented) + parseInt(herculesdaysrented));
alert("your total price to pay is $" + price)

/*
Suppose you're working as a contractor for 3 companies:
Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
 You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

let GooglePayPerHour = prompt("Googles hourly rate?"), AmazonPayPerHour = prompt("Amazons hourly rate?"), FacebookPayPerHour = prompt("Facebook hourly rate?");
let HoursFacebook = prompt("How many hours did you work at Facebook?"), HoursGoogle = prompt("How many hours did you work at Google?"), HoursAmazon = prompt("How many hours did you work at Amazon?");
let TotalPay = (parseInt(HoursFacebook) * parseInt(FacebookPayPerHour)) + (parseInt(HoursAmazon) * parseInt(AmazonPayPerHour)) + (parseInt(HoursGoogle) * parseInt(GooglePayPerHour));
alert("your total pay: " + TotalPay);

/*
A student can be enrolled in a class only if the class is not full
and the class schedule does not conflict with her current schedule.
 */

let ClassFull = confirm("is your class full? cancel for no");
let ConflictSchedule = confirm("does it conflict with your schedule? cancel for no");
if(ClassFull && ConflictSchedule){
    alert("you can't enroll :(")
}
else{
    alert("you can be enrolled ")
}

/*
A product offer can be applied only if a person buys more than 2 items
, and the offer has not expired. Premium members do not need to buy
a specific amount of products.
 */
let OfferExpired = confirm("is the offer still valid? cancel for no");
if(OfferExpired){
    let RegularMember = confirm("are you a regular member? cancel for no");
    let ItemOffer = 2;
    let buys = prompt("how much items did you buy");
    parseInt(buys);
    if (RegularMember){
        if(buys >= ItemOffer){
            alert("you are eligible for the product offer!")
        }else{
            alert("You aren't eligible for the product off:(")
        }
    }
    if(!RegularMember) {
        alert("You're a Premium Member and are eligible for the product offer")
    }
}else{
    alert("the offer is expired")
}




