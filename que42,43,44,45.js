//                                            //Que # 42
// // Function to make magicians great
// function make_great(magicians: string[]): string[] {
//     const great_magicians: string[] = [];
//     for (const magician of magicians) {
//         great_magicians.push(`the Great ${magician}`);
//     }
//     return great_magicians;
// }
export {};
// // Call the function and store the modified list
// const great_magicians: string[] = make_great(magicians);
// // Call the show_magicians function to see the modified list
// show_magicians(great_magicians);
//                                             //Que # 43
// // Call the function with a copy of the original array
// const modified_magicians: string[] = make_great([...magicians]);
// // Call the show_magicians function with both arrays
// show_magicians(magicians);
// show_magicians(modified_magicians);
//                                              //Que # 44
// // Function to summarize a sandwich order
// function make_sandwich(...items: string[]): void {
//     console.log("Sandwich order:");
//     for (const item of items) {
//         console.log(`- ${item}`);
//     }
// }
// // Call the function with different numbers of arguments
// make_sandwich("Ham", "Cheese");
// make_sandwich("Turkey", "Lettuce", "Tomato");
// make_sandwich("Peanut Butter", "Jelly");
//                                              //Que # 45
// // Function to store car information in an object
// function store_car(manufacturer: string, model: string, ...features: string[]): { manufacturer: string, model: string, [key: string]: string } {
//     const car: { manufacturer: string, model: string, [key: string]: string } = { manufacturer, model };
//     for (let i = 0; i < features.length; i += 2) {
//         car[features[i]] = features[i + 1];
//     }
//     return car;
// }
// // Call the function
// console.log(store_car("Toyota", "Corolla", "Color", "Red", "Year", "2022"));