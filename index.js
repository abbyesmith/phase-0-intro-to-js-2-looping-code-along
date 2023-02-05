// Code your solutions in this file
for (let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

const namesArray = ["Guadalupe", "Ollie", "Aki"]
const event = "Birthday"

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i=0; i<namesArray.length; i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
}


function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
        chooseSeedLocation();
        plantSeed();
        waterSeed();
        keepWorking = checkForMoreSeeds();
    }
}

// function countDown() {
//     for (let j=10; j<0; j--) {
//         console.log(j);
//     }

function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown --);
    }
}