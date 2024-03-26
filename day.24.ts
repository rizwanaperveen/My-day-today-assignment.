//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

//Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
function letUseloop(){
    for(let i=1; i <= 5; i++){
        console.log(i)
    }
}
letUseloop()
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

//Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.

 let age = 25;
 age = 26; // Works fine because `let` allows reassignment
 console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
 const name = "Babar";
 try{
    name = "babar";
}catch (error){
    console.log("const does not allow to reassign.")
}
// This example illustrates that `const` prevents changing the variable once it's set.

//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

//Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.

{
    let blockLet = "I am Pakistani."
    const blockConst = "You are Pakistani."
    console.log(blockLet); 
    console.log(blockConst);
}
try{
    console.log(blockLet); 
}catch(error){
    console.log("blockLet is not accessible outside the block."); 
}
try{
    console.log(blockConst); 
}catch(error){
    console.log("blockConst is not accessible outside the block"); 
}