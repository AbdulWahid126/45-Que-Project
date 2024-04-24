//Que # 33
// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print ordinal numbers
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Que # 34
// Array of favorite pizza types
const pizzas = ["Pepperoni", "Margherita", "Vegetarian"];
// Loop through the array and print a sentence for each pizza
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Print additional sentence
console.log("I really love pizza!");
//Que # 35
// Array of animals
const animals = ["Dog", "Cat", "Bird"];
// Loop through the array and print a statement about each animal
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print additional sentence
console.log("Any of these animals would make a great pet!");
export {};
