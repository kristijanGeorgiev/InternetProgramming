const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.toString = function() {
    return `Person: ${this.firstName} ${this.lastName} (${this.age})`;
}

const weko = new Person('Wekoslav', 'Stefanovski', 0x2F);
console.log(weko.toString());

const kristijan ={
    firstName: "Kristijan",
    lastName: "Georgiev",
    age: "22"
}

Object.setPrototypeOf(kristijan, Person.prototype);
console.log(kristijan.toString());

console.log(Person.prototype.toString.call(kristijan));