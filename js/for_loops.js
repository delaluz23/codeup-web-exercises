function showMultiplicationTable(x){
    for(let i = 1 ; i <= 10 ; i++){
        console.log((x * i), `=${x} * ${i}`);
    }
}
showMultiplicationTable(7)


function EvenOrOdd(){

    for(let i = 1; i <= 10; i++){
        let random = Math.floor(Math.random() * (200 -20)+1)+20;
        if(random % 2 === 0){
            console.log(`${random} is even`);
        }else {
            console.log(`${random} is odd`);
        }
    }
}
EvenOrOdd();


function Pyramid (x) {
    for (let i = 1; i <= x; i++){
        let rows = '';
        for (let j =1; j<=i; j++){
            rows += i;
        }
        console.log(rows);
    }
}
Pyramid(9);

function minusFive (){
    for(let i = 100; i >=5; i-=5 ){
        console.log(i);
    }
}
minusFive()