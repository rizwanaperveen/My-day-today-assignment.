//**Question 64:** Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with `"Age: "` and `30`, it should give back `"Age: 30"`.
//**Explain & TIP:** In JavaScript, the `+` operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
// This function mixes a text and a number into one text
function addStringAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
// Trying it out with "Age: " and 35
console.log(addStringAndNumber("Age: ", 35)); // Shows "Age: 35"
// Here, we put together the text and number.
//**Question 65:** Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the `%` sign. For example, `remainder(5, 2)` should give `1`.
//**Explain & TIP:** The `%` (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.
// This function finds the leftover of dividing two numbers
function remainderModulous(num1, num2) {
    return num1 % num2;
}
console.log(remainderModulous(56, 5));
//**Question 66:** Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true` if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.
//**Explain & TIP:** The `&&` operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
console.log(checkBothTrue(true, true));
export {};
