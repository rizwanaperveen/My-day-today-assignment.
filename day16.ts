//**Question 46:** Enhanced Laptop Object: Construct an object for a laptop including properties `make`, `model`, `year`, and a method `describe()` that logs a sentence about the laptop.

//**Explain & TIP:** Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.

let laptop = {
    manufacture : "Dell",
    model : "XPS 15",
    year : "2023",
   describe : function() {
    console.log(`This laptop is a ${this.year} ${this.model} ${this.manufacture}.`); 
}
};
laptop.describe();

//**Question 47:** Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

//**Explain & TIP:** Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.

let laptops = [
    {make : "Dell",model : "XPS 15", year : "2023"},
    {make : "Apple", model : " MacBook Pro",year : "2020"},
    {make : "HP", model : "Spectre x360", year : "2021"}
];
let [laptop1,laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

//**Question 48:** Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

//**Explain & TIP:** The spread operator can be used in conjunction with array methods like `sort()` to combine and manipulate arrays efficiently.

// let pricesSet1 = [1200, 1500, 1100];
// let pricesSet2 = [1000, 1300, 1600];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
// console.log(combinedPrices);
let prices1 = [13500,14000,16000];
let prices2 = [14500,17000,18500];
let combinedPrices = [...prices1,...prices2].sort((a, b) => a-b);
console.log(combinedPrices);