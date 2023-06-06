function showMultiplicationTable(x){
    for(let i = 1 ; i <= 10 ; i++){
        console.log((x * i), `=${x} * ${i}`);
    }
}
showMultiplicationTable(7)


function EvenOrOdd(x){
    for(let i = 1; i <= 10; i++){
        if(x % 2 ===0){
            return `${x} is even`
        }else {
            return `${x} is odd`
        }
    }
}
console.log(EvenOrOdd(Math.floor(Math.random() * 200)+20))

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