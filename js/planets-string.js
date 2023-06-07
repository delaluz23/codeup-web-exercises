(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|")

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join(" <br> "));




        let list = planetsArray.join(' </li> <li> ');
        console.log(`<ul> <li> ${list} </li> </ul>`)

    // console.log(`<ul> ${planetsArray.join(' <li> ')} </ul>`);





    // let ul = document.createElement('ul');
    // let ulID = (`${ul} id=Unlist ${ul}`)
    // function unorderedList(x){
    //     ulID
    //     let list = document.getElementById("Unlist");
    //     let fraglist = document.createDocumentFragment();
    //     for (let i = 0; i < x.length; i++){
    //         let li = document.createElement('li');
    //         li.textContent = x[i];
    //         fraglist.appendChild(li);
    //     }
    //     ulID.appendChild();
    // }
    // unorderedList(planetsArray);



})();