export {}

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x2F,
};

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

const student: Person = {
    firstName: "David",
    lastName: "Najdovski"
}

console.log(greet(weko));
console.log(greet(student));

class PersonClass {
    firstName: string;
    lastName: string;
    age?: number;

    constructor(firstName: string, lastName: string, age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const wekoClass = new PersonClass("Wekoslav", "Stefanovski", 0x2F);

console.log(greet(wekoClass));