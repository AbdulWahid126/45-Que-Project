
                                           //Que # 36
// Function to make a shirt
function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function
make_shirt("Large", "I love TypeScript");


                                           //Que # 37
// Function to make a shirt with default values
function make_shirt01(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function
make_shirt01(); // Large shirt with default message
make_shirt01("Medium"); // Medium shirt with default message
make_shirt("Small", "Hello, World!"); // Small shirt with custom message


                                           //Que # 38
// Function to describe a city
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");