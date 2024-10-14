let res = [-1,5,6,3];
let res1 = [14,3.5,6];
let res2 = [8,15,100];

function sumRes(arr){
    let suma = 0;
    for(i=0; i<arr.length; i++){
    
        if(arr[i]<0){
            suma = arr[i]*(-1); 
        } else{
            suma += arr[i];
        }
    }
    return suma
}

console.log(sumRes(res) + " Ohms");
console.log(sumRes(res1) + " Ohms");
console.log(sumRes(res2) + " Ohms");