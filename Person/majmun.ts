export {}
interface Person {
    name: string;
    age: number
}
interface Employee extends Person {
    employeeId: number
}
const newEmployee: Employee = {
    name: "Zoran",
    age: 48,
    employeeId: 1
}
console.log(newEmployee)