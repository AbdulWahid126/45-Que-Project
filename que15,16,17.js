//Que # 15
// Initial guest list
const guestList02 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Print invitation messages
for (const guest of guestList02) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us.`);
}
// Name of the guest who can't make it
const unableToAttend = "Leonardo da Vinci";
console.log(`${unableToAttend} regrets that they can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const replacementGuest = "Nikola Tesla";
const indexOfUnableToAttend = guestList02.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestList02[indexOfUnableToAttend] = replacementGuest;
}
// Print invitation messages again with updated guest list
for (const guest of guestList02) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us.`);
}
//                             //Que # 16
// Initial guest list
let guestList03 = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"];
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList03.unshift("Ada Lovelace");
// Add one new guest to the middle of the array
const middleIndex = Math.floor(guestList03.length / 2);
guestList03.splice(middleIndex, 0, "Charles Darwin");
// Add one new guest to the end of the array
guestList03.push("Stephen Hawking");
// Print a new set of invitation messages
for (const guest of guestList03) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us.`);
}
//                              //Que # 17
// Print a message indicating only two people can be invited for dinner
console.log("Unfortunately, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList03.length > 2) {
    const removedGuest = guestList03.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
// Print invitation messages to the two remaining guests
for (const guest of guestList03) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
// Remove the last two names from the list
guestList03.splice(-2);
// Print the empty list
console.log("Guest list:", guestList03);
// Print the empty list
console.log("Guest list:", guestList03);
export {};
