const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
}

const person = {
    toString: function() {
        return `Person: ${this.firstName} ${this.lastName} (${this.age})`;
    }
}

const kristijan = {
    firstName: "Kristijan",
    lastName: "Georgiev",
    age:22
}

const person1 = {
    toString: function() {
        return `Person: ${this.firstName} ${this.lastName} (${this.age})`
    }
}

Object.setPrototypeOf(weko, person);
console.log(weko.toString());

Object.setPrototypeOf(kristijan, person1);
console.log(kristijan.toString());
