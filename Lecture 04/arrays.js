var fruits = [
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
var firstFruit = fruits.shift();
console.log(firstFruit === null || firstFruit === void 0 ? void 0 : firstFruit.toUpperCase());
var peopleAges = {
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
    "Anastasija": 53,
    "Niki": 48,
    "Bojan": 36,
    "Stefan": 47,
    "Borjan": 63,
    "Rastko": 57,
    "Luka": 30,
    "Angelevska": 49,
    "Matea": 60,
};
var entries = Object.entries(peopleAges);
for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i], key = _a[0], value = _a[1];
    console.log("".concat(key.toUpperCase(), " will be ").concat(value + 1, " years old."));
}
