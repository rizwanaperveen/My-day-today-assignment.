//52 Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

//Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
let smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};

// Shows what we've set up about the smartphone
console.log(smartphone);
//53 Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

//Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);

//54 Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

//Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject= {key:String,value:String}
    return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);