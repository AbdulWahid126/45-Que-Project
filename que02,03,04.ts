
                             //Que # 02
                         
const personName: string = "Eric";
// Print a personalized message
console.log(`Hello ${personName}, would you like to learn some TypeScript and Node.js today?`);


                       //Que # 03
// Store the person's name in a variable
const personName02: string = "John Doe";

// Convert name to lowercase
const lowercaseName: string = personName02.toLowerCase();

// Convert name to uppercase
const uppercaseName: string = personName02.toUpperCase();

// Convert name to titlecase
const titlecaseName: string = personName02.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});

// Print the names
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titlecaseName);


                      //Que # 04
// Define the quote and its author
const quote: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";

// Print the quote and its author
console.log(`"${quote}" - ${author}`);