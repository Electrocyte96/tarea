
function arrayMultiplos(number, length){
    let arr = [];
    let x = 0;
    for (i=1; i<=length; i++){
        x = number * i;
        arr.push(x);
    }
    return arr;
}
console.log(arrayMultiplos(2,10));
console.log(arrayMultiplos(17,6));