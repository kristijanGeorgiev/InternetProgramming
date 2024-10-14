function calculateFactorialIterative(number) {
    console.log('Calculating factorial for:', number);
    if (number < 0) return undefined;
    if (number === 0 || number === 1) return 1;
    
    let factorial = 1;
    for (let multiplier = 2; multiplier <= number; multiplier++) {
        factorial *= multiplier;
    }
    return factorial;
}
function calculateFactorialRecursive(number) {
    console.log('Calculating factorial for:', number);
    if (number < 0) return undefined;
    if (number === 0 || number === 1) return 1;
    
    return number * calculateFactorialRecursive(number - 1);
}
console.log(calculateFactorialRecursive(5));