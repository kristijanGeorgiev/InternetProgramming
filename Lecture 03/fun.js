function double(x){
    return x * 2
}

const doubleFe = function(x) {
    return x * 2
}

console.log(doubleFe(5))
function getPasswordFromUser() {
    // dummy function to get password from user
    return "password";
}
function checkPassword() {
    const secretValue = "password";
    const userPassword = getPasswordFromUser()
    if(secretValue = userPassword)
    {
        console.log("Correct password")
    }
    else
    {
        console.log("Incorrect password")
    }
}