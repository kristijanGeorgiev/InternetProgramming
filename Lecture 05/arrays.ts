const fruits = ['apple','banana','cherry','strawberry','grape','lemon','kiwi']
fruits.push('orange')
const firstFruit= fruits.shift()
console.log(firstFruit?.toUpperCase())
console.log(fruits)
const peopleAges = {
    "Alice": 42,
    "Bob": 34,
    "Charlie": 23,
    "David": 41,
    "Eve": 35,
    "Kristijan": 21
}
console.log(Object.entries(peopleAges))
const stringArray : string[] = ["a","b","c"]
const tuple : [string, number] = ["a", 1]
//for(const [key,value] of entries) {
    //console.log(`${key.toUpperCase} will be ${value + 1} years old`)
//}