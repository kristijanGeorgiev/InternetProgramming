const numbers = [1,2,3,4,5,6,7]
console.log('for-loop')
for(let index = 0; index < numbers.length; index +=1) {
    const number = numbers[[index]];
    console.log(number)
}
console.log('for-of')
for(const number of numbers) {
    console.log(number)
}