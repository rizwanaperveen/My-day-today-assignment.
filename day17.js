//49  Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
//Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs graceful
// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("coding", "gardening", "cooking");
//**Question 50:** Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
//**Explain & TIP:** Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
// Using template literals to define a multiline string
let myIdealDay = `My ideal day would include,
1-Get up early, and perform namaz and Quran.
2-Doing my daily work on time.
3-Perform five times praying on time.`;
// Logging the multiline string to the console
console.log(myIdealDay);
//**Question 51:** Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//**Explain & TIP:** Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(6, 8)); // Logs the area of the rectangle.
export {};
