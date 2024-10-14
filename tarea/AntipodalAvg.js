let arr = [1,2,3,8,5,22,6];

function antipodalAvg(arr){
    arrNuevo = [];
    arruno = [];
    arrdos = [];

    if ((arr.length % 2 ) != 0){
        del = (arr.length / 2) - 0.5;
        arr.splice(del, 1);
    }

    for (i=0; i<((arr.length)/2); i++){
        arruno.push(arr[i]);
    }
    
    for (j=arr.length-1; j>((arr.length)/2)-1; j--){
        arrdos.push(arr[j]);
    }    
    arrdos = arrdos.reverse();

    for (h=0; h<(arr.length)/2; h++){
        arrNuevo.push((arruno[h] + arrdos[h])/2);
    }
    
    return arrNuevo;
}