// const fs = require('fs'); //FS == FILE SYSTEM
import fs from 'fs'; 

console.log(Math.random()) //a number between 0 and 1

function diceRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function diceRollMany(sides, quantity) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
        total += diceRoll(sides);
    }
    return total;
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

console.log(diceRoll(6));
console.log(diceRollMany(6, 3)); //3-18 - bell curve distribution

const fruit = ["apple", "cherry", "banana"]

console.log(pickRandom(fruit));

let outcomes = {
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
}
for(let i=0; i<999; i++){
    outcomes[diceRollMany(6, 3)]++;
}
for(let k in outcomes){
    console.log("#".repeat(outcomes[k]/3), k, outcomes[k])
}
const text = JSON.stringify(outcomes);

fs.writeFile('normal_random_distribution.json', text, console.log);
