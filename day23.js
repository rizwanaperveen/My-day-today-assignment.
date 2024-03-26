//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
//Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(15, "18"));
// The string "5" is turned into the number 5, and then added to 10.
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
//Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
// This function multiplies two decimal numbers
function multiplyDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
// Multiplies the numbers and rounds the result to two decimal places
console.log(multiplyDecimal(0.3, 0.4));
// After multiplying, we round to make the result easier to read.
//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
//Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
console.log(divideAndRemainder(20, 6));
export {};
