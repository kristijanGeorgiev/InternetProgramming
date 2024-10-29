export {};
interface Person {
    firstName: string,
    lastName: string,
    age: number
}
const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 41
}
function greet(person: Person) {
    person.age
    return `Hello ${person.firstName} ${person.lastName}`;
}
const student: Person = {
    firstName: "Kristijan",
    lastName: "Georgiev",
    age: 22
}
console.log(greet(weko))
console.log(greet(student))
