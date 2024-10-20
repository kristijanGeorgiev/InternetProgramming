"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x2F,
};
function greet(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName, "!");
}
var student = {
    firstName: "David",
    lastName: "Najdovski"
};
console.log(greet(weko));
console.log(greet(student));
var PersonClass = /** @class */ (function () {
    function PersonClass(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return PersonClass;
}());
var wekoClass = new PersonClass("Wekoslav", "Stefanovski", 0x2F);
console.log(greet(wekoClass));
