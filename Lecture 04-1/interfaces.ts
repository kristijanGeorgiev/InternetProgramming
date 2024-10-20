export {}
interface Person {
    firstName: string;
    lastName: string;
    age?: number
}
const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2f
}
function greet(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`
}
const student: Person = {
    firstName: 'Kristijan',
    lastName: 'Georgiev',
}
console.log(greet(weko))
console.log(greet(student))
class Person {
    firstName: string;
    lastName: string;
    age?: number;
    constructor(firstName: string, lastName: string, age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const wekoClass = new Person("Wekoslav","Stefanovski", 0x2f);
console.log(greet(wekoClass))