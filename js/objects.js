(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let persons = {
        firstname: "rick",
        lastname:"sanchez",
        sayHello() {
            return `Hello, ${this.firstname} ${this.lastname}`
        }

    }


        console.log(persons.firstname);
        console.log(persons.lastname);













    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //or you could do this
    //person.sayHello = function(){
    //  return `hello from ${this.firstName} ${this.lastname};
    //}
    //console.log(person.sayHello());


    console.log(persons.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    //offer for more than 200 12% discount
    //using conditionals that logs
    //ryan, cameron, and george
    //cameron bought 180
    // ryan bought 250
    // george bought 320
    //show name, amount before discount, total discount, and price after discount


for(let i = 0; i < shoppers.length; i++) {
    if (shoppers[i].amount > 200) {
        console.log(`Hello ${shoppers[i].name}! You're total price is $${shoppers[i].amount}. You're total discount is ${shoppers[i].amount * .12}. You're price after discount is ${shoppers[i].amount - (shoppers[i].amount * .12)} `);
    } else{
        console.log(`Hello ${shoppers[i].name}! You're total price is $${shoppers[i].amount}. and you're not eligible for the discount`)
    }
}

    // or you can do this:
    // shoppers.forEach((shopper) => {
    // console.log(`${shopper.name} spent ${shopper.amount}.you're total after discount is ${shopper.amount  > 200 ? shopper.amount * .88 : shopper.amount} `)
    // })





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */



    let books = [
        {
            title: "The Salmon of Doubt",
            author:
                {
                    firstname: "Douglas",
                    lastname: "Adams"
                }
        },
        {
            title: "The Empress of Salt and Fortune",
            author:
                {
                    firstname: "Nghi",
                    lastname: "Vo"
                }
        },
        {
            title: "Veronika Decides to Die",
            author:
                {
                    firstname: "Paulo",
                    lastname: "Coelho"
                }
        },
        {
            title: "The Anubis Gates",
            author:
                {
                    firstname: "Tim",
                    lastname: "Powers"
                }
        },
        {
            title: "Clockwork Angel",
            author:
                {
                    firstname: "Cassandra",
                    lastname: "Glare"
                }
        }

    ]
for(let i = 0; i<books.length; i++){
    console.log("\n");
    console.log("title: " + books[i].title);
    console.log("author first name: " + books[i].author.firstname);
    console.log("authors last name: " + books[i].author.lastname);
    console.log("\n");
}





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    let otherBooks = [
        {
            Title: "The Salmon of Doubt",
            Author: "Douglas Adams"
        },
        {
            Title: "Walkaway",
            Author: "Cory Doctorow"
        },
        {
            Title: "A Brief History of Time",
            Author: "Stephen Hawking"
        }
    ]

    for(let i = 0 ; i < otherBooks.length; i++){
        console.log(`Book #${i} \n Title:${otherBooks[i].Title} \n Author:${otherBooks[i].Author} \n`)
    }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     *
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(){
        let titleAsk = prompt("Enter a title of a book");
        let title = titleAsk.toLowerCase();
        let authorAsk = prompt("enter an author of a book");
        let author = authorAsk.toLowerCase();
        for(let i =0; i < otherBooks.length; i++){
            if(title == otherBooks[i].Title.toLowerCase() && author == otherBooks[i].Author.toLowerCase() ){
                return`Book #${i} \n Title:${otherBooks[i].Title} \n Author:${otherBooks[i].Author} \n`
            } else {
                return `we dont got that book you silly`
            }
        }
    }
    console.log(createBook())




    function  showBookInfo (x) {
        for(let i =0; i< otherBooks.length; i ++){
            if(x.toLowerCase() === otherBooks[i].Author.toLowerCase() || x.toLowerCase() === otherBooks[i].Title.toLowerCase() )
                console.log(`author: ${otherBooks[i].Author} title: ${otherBooks[i].Author}`);
        }
    }
    showBookInfo(prompt("enter a book title or author"))

    







})();