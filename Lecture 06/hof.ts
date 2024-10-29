const double = (x: number) => x * 2
const increment = (x: number) => x + 1
const square = (x: number) => x * x

const numbers = [34, 67, 12, 89, 45, 23, 78, 91, 3 , 56, 82, 15, 69, 37, 94, 51, 8, 73, 29, 62]

const doMath = (values: number[]) => {
    for(let index = 0; index < values.length; index++) {
        const element = values[index];
        const squared = square(element);
        const incremented = increment(squared);
        console.log(incremented)
    }
}
console.log(doMath(numbers));