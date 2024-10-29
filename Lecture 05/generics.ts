function processPartial<T>(
    data: T[], 
    processor: (item: T) => void, 
    limit : number) {
    for( let i = 0; i < limit; i++) {
        processor(data[i])
    }
}
const fruits1 = ["apple","banana","cherry","strawberry","grape"];
const printFruit = (fruit: string) => console.log(fruit);
processPartial(fruits1, printFruit, 3);

const numbers = [1,2,3,4,5,6,7,8,9];
const printDoubleNumber = (number: number) => console.log(number, 2);
processPartial(numbers, printDoubleNumber, 2);