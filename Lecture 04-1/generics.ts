export {}
function processPartial<T> (data: T[], processor: (item: T) => void, limit: number) {
    for (let i = 0; i < limit; i++) {
        processor(data[i])
    }
}
const fruits = ['apple','banana','cherry','elderberry','strawberry','peach','orange','watermelon','lemon']
const printFruit = (fruit: string) => console.log(fruit);
processPartial(fruits, printFruit, 3)
const vegetables = ['carrot','baggage','tomato','pepper','celery','potato','onion']
const printVegetable = (vegetable: string) => console.log(vegetable);
processPartial(vegetables,printVegetable, 3)
const numbers = [1,2,3,4,5,6,7,8,9]
const printNumber = (number: number) => console.log(number);
processPartial(numbers, printNumber, 4)
numbers.map