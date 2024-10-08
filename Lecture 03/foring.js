const fruits = ['apple','banana','orange','grape','kiwi']
console.log('for-loop');
for(let index= 0; index < fruits.length; index += 1)
{
    const fruit= fruits[index]
    console.log(fruit);
}
console.log('for-of');
for(const fruit of fruits) {
    console.log(fruit);
}
const numbers= [1,2,3,4,5];
const target = 3;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        continue
    }
    console.log(numbers[i])
}