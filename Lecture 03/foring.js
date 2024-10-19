const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('for-loop');
for (let index = 0; index < fruits.length; index += 1) {
    const fruit = fruits[index];
    console.log(fruit);
}
console.log('for-of');
for (const fruit of fruits) {
    console.log(fruit);
}