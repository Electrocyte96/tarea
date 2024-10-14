let a = 4;
let b = 10;

function divHalves(n){  
    let arr = [];
    x = 0;
    for (i=0; i<2; i++){
        x = n/2;
        arr.push(x); 
    }
    return arr;
}

console.log(divHalves(a));
console.log(divHalves(b));