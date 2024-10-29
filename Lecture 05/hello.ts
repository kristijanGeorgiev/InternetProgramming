const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 41
};
console.log(weko);
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}
console.log(greet(weko))

const wekoString = 'Wekoslav Stefanovski'
const number = 7;
const myBoolean = true;

console.log(wekoString.toLowerCase())
console.log(number * 2)

function add(a, b) {
    return a + b
}

console.log(add(3, 4))
console.log(add(2, 8))
console.log(add(3, 2))
console.log(add(7, 5))
console.log(add(6, 9))
console.log(add(2, 4))
console.log(add(1, 4))
console.log(add(7, 4))

console.log(add(3,5))