function double(num) {
    return num * 2;
}

const b = double(3);

console.log(b);

// bad
function concatenate(first, second) {
    return first + " " + second;
}

// better
function concatenate(first, second) {
    return `${first} ${second}`;
}

const fullName = concatenate("Wekoslav", "Stefanovski");

console.log(fullName);