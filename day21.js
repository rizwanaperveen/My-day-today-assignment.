//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
//Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
// Making a list (enum) for different types of vehicles
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Suzuki"] = 0] = "Suzuki";
    Vehicles[Vehicles["Bus"] = 1] = "Bus";
    Vehicles[Vehicles["Rikshaw"] = 2] = "Rikshaw";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Rikshaw);
// Filling in the blueprint with an example student
let student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};
// Showing the student's information
console.log(student);
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
export {};
// We made a flexible program that can describe different shapes in detail.
