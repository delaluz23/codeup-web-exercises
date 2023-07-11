//empty array to capture user input
let keypressed = '';
//colors for konami code
let colors = ['hotpink', 'pink', 'deeppink', 'lightpink']
//counter for color change
let currentIndex = 0;
//empty array to track user input
let keyPressedArray =[];
//empty variable to display text
let DisplayText;
//return white
let x = ['white'];
//to stop interval
let intervalID;

// function to check indexes of array match to konami code
function change (e){
   intervalID = setInterval(function () {
        $('body').css({
            backgroundColor: e[currentIndex]
        });
        if (!e[currentIndex]) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    }, 400);
}

//event listener to see every letter typed and store it in keypressed and display it back
$(document).on('keyup', eventListener);

// function for every letter typed and store it in keypressed and display it back
function eventListener(e) {
    console.log(e.key);
    keypressed += e.key + ",";
    console.log(keypressed)
    keyPressedArray = keypressed.split(',')
    console.log(keyPressedArray)
    konamiCode(keyPressedArray);
    DisplayText = document.querySelector('#display-code').textContent = keypressed;
}

function konamiCode(code) {
    if (code[0] === 'ArrowUp' &&
        code[1] === 'ArrowUp' &&
        code[2] === 'ArrowDown' &&
        code[3] === 'ArrowDown' &&
        code[4] === 'ArrowLeft' &&
        code[5] === 'ArrowRight' &&
        code[6] === 'ArrowLeft' &&
        code[7] === 'ArrowRight' &&
        code[8].toLowerCase() === 'b' &&
        code[9].toLowerCase() === 'a'
    ) {

       $('body').css('background-color', change(colors))

        console.log("i did it")
//function to change background colors for konami code

    }
    //unlimited ammo cheat code
    else if (
        code[0].toLowerCase() === 'l' &&
        code[1].toLowerCase() === 'b' &&
        code[2].toLowerCase() === 'r' &&
        code[3].toLowerCase() === 'b' &&
        code[4].toLowerCase() === 'x' &&
        code[5].toLowerCase() === 'r' &&
        code[6].toLowerCase() === 'b' &&
        code[7] === 'ArrowLeft' &&
        code[8].toLowerCase() === 'r' &&
        code[9].toLowerCase() === 't' &&
        code[10].toLowerCase() === 'r' &&
        code[11].toLowerCase() === 'b' &&
        code[12] === 'ArrowLeft' &&
        code[13].toLowerCase() === 'x' &&
        code[14] === 'ArrowDown' &&
        code[15].toLowerCase() === 'l' &&
        code[16].toLowerCase() === 'b' &&
        code[17].toLowerCase() === 'l' &&
        code[18].toLowerCase() === 'b'
    ){
        let GTA = 'https://media.tenor.com/5I5OR7HikLsAAAAd/gta-gta-sa.gif'
        $('body').css("background-image", "url('" + GTA + "')")
    } else {

        $('#reset').on("click", function () {
            clearInterval(intervalID);
            $("body").css("background-color", 'white')
            $("body").css("background-image", 'unset')
            $("#display-code").html("");
            keyPressedArray = []
            keypressed = ""
        })
    }
}



