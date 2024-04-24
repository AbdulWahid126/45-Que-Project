
                                        //Que # 27
// Choose a color for the alien
let alien_color03: string = 'yellow';

// If-else chain to award points based on the alien's color
if (alien_color03 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color03 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color03 === 'red') {
    console.log("The player earned 15 points.");
}

                                        //Que # 28
// Set the age of the person
let age: number = 30;

// Determine the stage of life based on age
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

                                         //Que # 29
// Array of favorite fruits
const favorite_fruits: string[] = ["banana", "apple", "mango"];

// Check if certain fruits are in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}