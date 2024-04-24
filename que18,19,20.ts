                             //Que # 18
// Array of places to visit
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Island", "Brazil"];

// Print array in its original order
console.log("Original order:", placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it's back to its original order
console.log("Original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show its order has been changed
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has been changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);


                                     //Que # 19
// Print the number of people invited to dinner
let guestList03: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"];
console.log(`Number of people invited to dinner: ${guestList03.length}`);


                                     //Que # 20
// Array of mountains
const mountains: string[] = ["Mount Everest", "K2", "Nagaperbhat", "Lhotse"];