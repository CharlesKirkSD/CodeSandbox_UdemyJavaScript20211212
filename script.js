'use strict'

function fruitProcessor(apples, oranges) {
    let juiceMix = `Juice with ${apples} Apples and ${oranges} oranges`;
    let totalFruits = apples + oranges;
    console.log(juiceMix);
    return totalFruits
}

let fruits = fruitProcessor(5, 5);
console.log(`The total number of fruits processed was ${fruits}`)