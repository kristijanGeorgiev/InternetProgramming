function isPrime(number) {
    if (number < 2 || !Number.isInteger(number)) {
        return false;
    }
    
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }
    return true;
}
const testCases = [
    { input: 2, expected: true },
    { input: 17, expected: true },
    { input: 4, expected: false },
    { input: 25, expected: false },
    { input: 97, expected: true },
    { input: 100, expected: false },
    { input: 7919, expected: true },
    { input: 7920, expected: false },
    { input: 0, expected: false },
    { input: 25, expected: false },
];
function test(func, testCases) {
    for (const {input, expected} of testCases) {
        const result = func(input);
        console.log(`${input}: ${result === expected ? 'PASS' : 'FAIL'}`);
    }
}
test(isPrime, testCases);