"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => {
    if (b === undefined) {
        return a;
    }
    return a + b;
};
const result = add(3, 4);
const len = (s) => s.length;
console.log(result);
console.log(len);
