export {};
interface IPerson {
   firstName: string;
   lastName: string;
   //age?: number;
   height?: number
}

type TPerson = {
    firstName: string;
    lastName: string;
    age?: number;
}
type PersonProps = keyof IPerson //"firstname" | "lastName" | "age";
const getPart = (person: IPerson, propertyName: PersonProps) => {
    return person[propertyName]
}

type A = "A"
type B = "B"
type C = "C"
type D = "D"
type F = "F"
type Grade = A | B |  C | D | F;

const student: TPerson = {
    firstName: "Kristijan",
    lastName: "Georgiev"
}
const grade: Grade = 'A';
const displayGrade =(student: IPerson, grade: Grade) => {
    console.log(`${student.firstName} ${student.lastName} has a grade of ${grade}`)
}
displayGrade(student, grade)
type TGraded = {
    grade: Grade;
}
type TStudent = TPerson & TGraded;

console.log(getPart(student, "height"));

enum GradeEnum {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
}
const gradeEnum: GradeEnum = GradeEnum.A;