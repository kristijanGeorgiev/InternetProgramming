import { Student } from './model/student'
import { StudentService } from './service/studentservice'
const studentservice = new StudentService();
const student1: Student = { id: 5422, name: "Kristijan", surname: "Georgiev", points: 78, grade: 'C+',  email: "kristijan.georg@gmail.com" };
const student2: Student = { id: 5472, name: "Nadica", surname: "Naumova", points: 63, grade: 'D',  email: "nadica.naumova@gmail.com" };
const student3: Student = { id: 5397, name: "Kristina", surname: "Avramovska", points: 84, grade: 'B',  email: "kristina.avramovska@gmail.com" };
const student4: Student = { id: 5462, name: "Ljupka", surname: "Kostadinova", points: 72, grade: 'C-',  email: "ljupka.kostadinova@gmail.com" };
const student5: Student = { id: 5448, name: "Slobodanka", surname: "Lozanovska", points: 90, grade: 'A-',  email: "slobodanka.lozanovska@gmail.com" };
const student6: Student = { id: 5419, name: "Angela", surname: "Krstevka", points: 62, grade: 'D-',  email: "angela.krstevska@gmail.com" };
studentservice.addStudent({ id: 5422, name: "Kristijan", surname: "Georgiev", points: 78, grade: 'C+',  email: "kristijan.georg@gmail.com" });
studentservice.addStudent(student2);
studentservice.addStudent(student3);
studentservice.addStudent(student4);
studentservice.addStudent(student5);
studentservice.addStudent(student6);
const allStudents = studentservice.getAllStudents();
console.log("All Students:", allStudents);
const StudentById = studentservice.getStudentById(5448);
console.log("Student with ID 5448:", StudentById);
