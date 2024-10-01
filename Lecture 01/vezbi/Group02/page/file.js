const name = "Wekoslav";
const age = 47;
const isProgrammer = true;

const weko = {
    name: name,
    age: age,
    isProgrammer: isProgrammer
};

const warr = [name, age, isProgrammer];

////////////////////////////////////////////

const headers = document.getElementsByTagName("h1")

const mainTitle = headers[0];

console.log(mainTitle.textContent);

const groupId = 3;

// bad example
mainTitle.textContent = "Group " + groupId + " Title";

// good example
mainTitle.textContent = `Group ${groupId} Title`;