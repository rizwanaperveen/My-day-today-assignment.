//Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
//Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
function updateVariable() {
    let a = "hania";
    console.log("initial value:", a);
    a = "sania";
    console.log("update value:", a);
}
updateVariable();
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
//Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.
function swapValues() {
    let a = 15;
    let b = 20;
    console.log("Before swap:a =", a, "b =", b);
    let temporarily = a;
    a = b;
    b = temporarily;
    console.log("After swap:a =", a, "b=", b);
}
swapValues();
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
//Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 3;
    console.log("Initial x:", x);
    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition
    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction
    x *= 2; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication
    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}
useCompoundOperators();
export {};
