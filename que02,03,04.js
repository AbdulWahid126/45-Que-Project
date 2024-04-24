//Que # 02
const personName = "Eric";
// Print a personalized message
console.log(`Hello ${personName}, would you like to learn some TypeScript and Node.js today?`);
//Que # 03
// Store the person's name in a variable
const personName02 = "John Doe";
// Convert name to lowercase
const lowercaseName = personName02.toLowerCase();
// Convert name to uppercase
const uppercaseName = personName02.toUpperCase();
// Convert name to titlecase
const titlecaseName = personName02.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
// Print the names
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titlecaseName);
//Que # 04
// Define the quote and its author
const quote = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";
// Print the quote and its author
console.log(`"${quote}" - ${author}`);
export {};
