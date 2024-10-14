const name = "Wekoslav";
const age = 47;
const isProgrammer = true;
const weko = {
    name: name,
    age: age,
    isProgrammer: isProgrammer
}
const warr = [name,age,isProgrammer]
const headers = document.getElementById("h1")
const maintitle = headers[0]
console.log(maintitle.textContent)
const groupID = 3;
maintitle.textContent = `Group ${groupID} Title`;