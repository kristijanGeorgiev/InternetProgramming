const combineGeneric = (f1: (n: number) => number, f2: (n: number) => number) => {
    const combined = (x: number) => f2(f1(x))
    return combined;
}
interface Person {
    firstname: string;
    lastname: string;
}

const fullname = (person: Person) => `${person.firstname} ${person.lastname}`

const kiko = {
    firstname: 'Kristijan',
    lastname: 'Georgiev'
}

const goce = {
    firstname: 'Goce',
    lastname: 'Lazarevski'
}