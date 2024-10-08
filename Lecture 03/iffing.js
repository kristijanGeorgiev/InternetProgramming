const falseBoolean = false;
const trueBoolean = true;
const emptyString = '';
const nonEmptyString = 'Hello, World!';
const zeroNumber = 0;
const nonZeroNumber = 42;
const nullValue = null;
const undefinedValue = undefined;
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
const emptyObject = {};
const nonEmptyObject = { key: 'value' };

console.log('False boolean:', falseBoolean);
if (falseBoolean) {
    console.log(`${falseBoolean}: True Branch`);
} else {
    console.log(`${falseBoolean}: False Branch`);
}

console.log('True boolean:', trueBoolean);
if (trueBoolean) {
    console.log(`${trueBoolean}: True Branch`);
} else {
    console.log(`${trueBoolean}: False Branch`);
}

console.log('Empty string:', emptyString);
if (emptyString) {
    console.log(`${emptyString}: True Branch`);
} else {
    console.log(`${emptyString}: False Branch`);
}

console.log('Non-empty string:', nonEmptyString);
if (nonEmptyString) {
    console.log(`${nonEmptyString}: True Branch`);
} else {
    console.log(`${nonEmptyString}: False Branch`);
}

console.log('Zero number:', zeroNumber);
if (zeroNumber) {
    console.log(`${zeroNumber}: True Branch`);
} else {
    console.log(`${zeroNumber}: False Branch`);
}

console.log('Non-zero number:', nonZeroNumber);
if (nonZeroNumber) {
    console.log(`${nonZeroNumber}: True Branch`);
} else {
    console.log(`${nonZeroNumber}: False Branch`);
}

console.log('Null value:', nullValue);
if (nullValue) {
    console.log(`${nullValue}: True Branch`);
} else {
    console.log(`${nullValue}: False Branch`);
}

console.log('Undefined value:', undefinedValue);
if (undefinedValue) {
    console.log(`${undefinedValue}: True Branch`);
} else {
    console.log(`${undefinedValue}: False Branch`);
}

console.log('Empty array:', emptyArray);
if (emptyArray) {
    console.log(`${emptyArray}: True Branch`);
} else {
    console.log(`${emptyArray}: False Branch`);
}

console.log('Non-empty array:', nonEmptyArray);
if (nonEmptyArray) {
    console.log(`${nonEmptyArray}: True Branch`);
} else {
    console.log(`${nonEmptyArray}: False Branch`);
}

console.log('Empty object:', emptyObject);
if (emptyObject) {
    console.log(`${emptyObject}: True Branch`);
} else {
    console.log(`${emptyObject}: False Branch`);
}

console.log('Non-empty object:', nonEmptyObject);
if (nonEmptyObject) {
    console.log(`${nonEmptyObject}: True Branch`);
} else {
    console.log(`${nonEmptyObject}: False Branch`);
}

console.log("--------------");

const zeroString = '0';
const falseString = 'false';


console.log('Zero string:', zeroString);
if (zeroString) {
    console.log(`${zeroString}: True Branch`);
} else {
    console.log(`${zeroString}: False Branch`);
}

console.log('False string:', falseString);
if (falseString) {
    console.log(`${falseString}: True Branch`);
} else {
    console.log(`${falseString}: False Branch`);
}

function getMeAnX() {

}

const x = getMeAnX();

if (!!x) {
    console.log("X is good");
} else {
    console.log("X is bad");
}

// let y;
// if (x === undefined) {
//     y = 7;
// } else {
//     y = 3;
// }

const y = (x === undefined) ? 7 : 3;