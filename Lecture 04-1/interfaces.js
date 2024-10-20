"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2f
};
function greet(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
const student = {
    firstName: 'Kristijan',
    lastName: 'Georgiev'
};
console.log(greet(weko));
console.log(greet(student));
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const wekoClass = new Person("Wekoslav", "Stefanovski", 0x2f);
console.log(greet(wekoClass));
