let players = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function onlineStatus(players){
    let n = players.length;

    if (n==0){
        return "No players online";
    } else if (n==1){
        return `${players[0]} is online`; 
    } else if (n==2){
        return `${players[0]}and ${players[1]} are now online`;
    } else if (n==3){
        return `${players[0]}, ${players[1]} and ${n-2} more are now online`;
    }
}

console.log(onlineStatus(players));