const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x2F,
};
console.log(weko);
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}
console.log(greet(weko));
const wekoString = "Wekoslav Stefanovski";
const number = 7;
const myBoolean = true;
console.log(wekoString.toLowerCase());
console.log(number * 2);
function add(a: any, b: number) {
    return a + b;
}
console.log(add(3, 4));
console.log(add(3, 8));
console.log(add(2, 4));
console.log(add(true, 4));
console.log(add([], 4));
console.log(add({}, 4));
console.log(add(null, 4));
console.log(add(undefined, 4));
console.log(add(4, 9));
console.log(add(4, 5));