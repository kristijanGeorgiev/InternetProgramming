function doubleFs(x) {
    return x * 2
}
const doubleFe = function(x) {
    return x * 2
}
console.log(doubleFs(5))
console.log(doubleFs(5))
function getPasswordFromUser() {
    return 'password'
}
(function () {
    const secretValue = 'password'
    const userPassword = getPasswordFromUser()
    if(secretValue === userPassword) {
        console.log('Correct password')
    }
    else
    {
        console.log('Incorrect password')
    }
})
const doubleFa = x => x * 2;