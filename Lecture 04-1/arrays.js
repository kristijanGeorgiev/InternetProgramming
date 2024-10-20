"use strict";
const fruits = ['apple', 'banana', 'cherry', 'kiwi', 'orange', 'watermelon', 'lemon', 'honeydew', 'grape', 'strawberry', 'elderberry'];
fruits.push('mango');
const firstFruit = fruits.shift();
console.log(firstFruit === null || firstFruit === void 0 ? void 0 : firstFruit.toUpperCase());
const peopleAges = {
    "Alice": 42,
    "Bob": 34,
    "Charlie": 23,
    "David": 41,
    "Eve": 35,
    "Kristijan": 21,
    "Nadica": 32,
    "Kristina": 27,
    "Ljupka": 30,
    "Slobodanka": 36,
    "Angela": 31,
    "Bojan": 38,
    "Niki": 23,
    "Anastasija": 47,
    "Stefan": 43,
    "Borjan": 48
};
const entries = Object.entries(peopleAges);
for (const [key, value] of entries) {
    console.log(`${key.toUpperCase()} will be ${value + 1} years old `);
}
