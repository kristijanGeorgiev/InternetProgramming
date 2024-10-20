"use strict";
const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2f
};
console.log(weko);
function greet(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
console.log(greet(weko));
const wekoString = "Wekoslav Stefanovski";
const number = 7;
const myBoolean = true;
console.log(wekoString.toLowerCase());
console.log(number * 2);
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
console.log(add(4, 1));
console.log(add(5, 4));
console.log(add(2, 4));
console.log(add(3, 1));
console.log(add(4, 2));
console.log(add(5, 3));
console.log(add(3, 9));
function mul(a, b) {
    return a * b;
}
console.log(mul(3, 2));
console.log(mul(4, 3));
console.log(mul(4, 1));
console.log(mul(5, 9));
console.log(mul(6, 5));
console.log(mul(5, 12));
console.log(mul(2, 8));
console.log(mul(7, 9));
