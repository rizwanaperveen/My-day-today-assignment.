// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

// Starts with a list of numbers

let numbers = [2,4,6,8,10];

// Doubles each number

let doubleNumber = numbers.map(numbers => numbers * 2);

// Shows the new list of doubled numbers

console.log(doubleNumber); // Output: [2, 4, 6, 8, 10]

// This line takes each number, doubles it, and puts it in a new list.

//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

//Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

// A mixed array of items

let mixArray = [1,"ali",true,"sana",false,6,"saba"];

// Picks out only the words

let stringArray = mixArray.filter(item => typeof item === "string");

// Shows the list of just words

console.log(stringArray); // Output: ["ali", "sana", "saba"]

// This line checks each item: if it's a word, it goes into the new list.

//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

//Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.

// A list of grades

let grades = [89,90,92,97,94,93,95];

// Calculates the average grade

//let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
let averageGrade = grades.reduce((total,grade) => total + grade, 0) / grades.length;
// Shows the average grade

console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.