"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
class StudentService {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getAllStudents() {
        return this.students;
    }
    getStudentById(id) {
        return this.students.find(student => student.id === id);
    }
}
exports.StudentService = StudentService;
