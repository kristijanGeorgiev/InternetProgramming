const fruits = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry', 
    'fig', 
    'grape', 
    'honeydew', 
    'kiwi', 
    'lemon'
];
fruits.push("mango");
const firstFruit = fruits.shift();
console.log(firstFruit?.toUpperCase());
const peopleAges = {
    "Alice": 42,
    "Bob": 34,
    "Charlie": 23,
    "David": 41,
    "Eve": 35,
    "Kristijan": 21,
    "Nadica": 46,
    "Kristina": 35,
    "Ljupka": 64,
    "Slobodanka": 59,
    "Angela": 66,
    "Nada": 72,
    "Anastasija":  53,
    "Niki": 48,
    "Bojan": 36,
    "Stefan": 47,
    "Borjan": 63,
    "Rastko": 57,
    "Luka": 30,
    "Angelevska": 49,
    "Matea": 60,
}
const entries = Object.entries(peopleAges);
for (const [key, value] of entries) {
    console.log(`${key.toUpperCase()} will be ${value+1} years old.`);
}