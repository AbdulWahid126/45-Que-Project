//Que # 39
// Function to format city and country
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
//Que # 40
// Function to create an album
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function for three different albums
console.log(make_album("Ed Sheeran", "Divide", 12));
console.log(make_album("Taylor Swift", "1989"));
console.log(make_album("Adele", "25", 11));
//Que # 41
// Function to show magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Array of magician names
const magicians = ["David Copperfield", "Harry Houdini", "Penn & Teller"];
// Call the function
show_magicians(magicians);
export {};
