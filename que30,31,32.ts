
                                          //Que # 30
// Array of usernames
const usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// Greet each user after logging in
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

                                          //Que # 31
// Check if the list of users is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

                                           //Que # 32
// List of current usernames
const current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];

// List of new usernames
const new_users: string[] = ["user2", "user3", "user6", "user7", "user8"];

// Loop through new_users list to check for uniqueness
for (const new_user of new_users) {
    const is_taken: boolean = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (is_taken) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}