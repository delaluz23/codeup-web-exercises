function MultiplyBy2 () {
    let x =2;

    while (x <= 65536){
        console.log(x);
        x = x * 2;
    }
}
MultiplyBy2();

/*
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
number between 50 and 100 representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,
 simulating the amount of cones being bought by her clients.
 Use a do-while loop to log to the console the amount of cones sold to each person.
 The below code shows how to get the random numbers for this exercise.
 */



//random number between 50 and 100 ✅
//random number = amount of cones to sell before loop if✅
//in loop generate random number between 1 and 5 per person✅
//do while loop to log amount of cones sold to ea person




function IceCream(){
    let allCones = Math.floor(Math.random() * 50) + 50;
    // let Persons = 0;
    let sold =0;
    console.log(`${allCones} cones to sell`)
    do {
        let conesBoughtPerPerson = Math.floor(Math.random() * 5) + 1;
        if (allCones < (conesBoughtPerPerson + sold)){
            console.log(`Can't sell you ${conesBoughtPerPerson} i only have ${allCones}`)
            break;
        }
        for(let persons = 0; persons <=50; persons++){
            sold += conesBoughtPerPerson;
            console.log(`${sold} cones sold, ${conesBoughtPerPerson} were bought, ${allCones - sold} is how many cones i have left`)
            if(sold === allCones) {
                console.log("sold them all");
            }
            break;
        }
    }while (sold < allCones)
}
IceCream();