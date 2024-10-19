export {};
function processPartial<T> (data: T[], processor: (item: T) => void, limit: number)  {
    for (let i = 0; i < limit; i++) {
        processor(data[i]);
    }
}
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const printFruit = (fruit: string) => console.log(fruit);
processPartial(fruits, printFruit, 3); // apple, banana, cherry
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const printDoubleNumber = (number: number) => console.log(number * 2);
processPartial(numbers, printDoubleNumber, 4); // 2, 4, 6, 8
numbers.map