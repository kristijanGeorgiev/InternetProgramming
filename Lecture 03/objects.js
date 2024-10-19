const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
};
console.log(weko.firstName);
const fieldName = 'firstName';
console.log(weko[fieldName]);
console.log("------------");
for (const key in weko) {
    const value = weko[key];
    console.log(`${key}: ${value}`);
}
console.log("------------");
const { age, ...rest } = weko;
console.log(age);
console.log(rest);
console.log("------------");
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const [first, second, ...restFruits] = fruits;
console.log(first);
console.log(second);
console.log(restFruits);