"use strict";
// let age = 30;
// console.log(age);
function swapId(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    if (typeof id === "number") {
        return id.toString();
    }
}
console.log(swapId("1"));
console.log(swapId(4));
// Function to calculate the area
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            throw new Error("Unknown shape");
    }
}
