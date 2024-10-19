const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calcOne = (array) => {
    let sum = 0;
    for (const number of array) {
        if (number % 2 !== 0) {
            sum += number * number;
        }
    }
    return sum;
}
console.log(calcOne(numbers));
const getOdds = (array) => {
    const result = [];
    for (const number of array) {
        if (number % 2 !== 0) {
            result.push(number);
        }
    }
    return result;
}
const getSquares = (array) => {
    const result = [];
    for (const number of array) {
        const square = number * number;
        result.push(square);
    }
    return result;
}
const getSum = (array) => {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}
const calcTwo = (array) => {
    const odds = getOdds(array);
    const squares = getSquares(odds);
    const sum = getSum(squares);
    return sum;
}
console.log(calcTwo(numbers));
const calcThree = (array) => {
    const odds = array.filter(num => num % 2 !== 0);
    const squares = odds.map(num => num * num);
    const sum = squares.reduce((acc, num) => acc + num, 0);
    return sum;
}