let secretName = ["Esperanza", "Franco", "Nia"];
let secretName1 = ['Harry', 'Ron', 'Hermione'];
let secretName2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];

function secretSociety(arr){
    arr = arr.sort();
    nombreSecreto = ""
    for(i=0; i<arr.length; i++){
        nombreSecreto+= arr[i][0];
    }
    return nombreSecreto;

}
console.log(secretSociety(secretName));
console.log(secretSociety(secretName1));
console.log(secretSociety(secretName2));