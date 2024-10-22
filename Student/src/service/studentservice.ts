
import { Student } from '../model/student'

export class StudentService {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getAllStudents(): Student[] {
        return this.students;
    }

    getStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }
}
