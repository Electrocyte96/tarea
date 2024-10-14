let arr = [-1, -3, -5, 4, 6767];

function positiveDom(arr){
    pos = 0;
    neg = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i]<0){
            neg = neg++;
        } else{
            pos = pos++;
        }
    }
    return pos > neg;
}

console.log(positiveDom(arr));