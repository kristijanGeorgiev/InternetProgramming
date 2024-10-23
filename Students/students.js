"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", setupInfrastructure);
let students = [];
function setupInfrastructure() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield loadData();
        students = data;
        const nameSorter = document.getElementById("sort-name");
        nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
        const idSort = document.getElementById("sort-id");
        idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
        const applyFilterButton = document.getElementById("apply-filter");
        applyFilterButton === null || applyFilterButton === void 0 ? void 0 : applyFilterButton.addEventListener("click", applyFilter);
        const modal = document.getElementById("subject-details");
        modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", () => {
            modal === null || modal === void 0 ? void 0 : modal.classList.add("hidden");
        });
        fillNationalities(students);
        displayStudents(students);
    });
}
const nameSorterFunction = (first, second) => first.name.localeCompare(second.name);
const idSorterFunction = (first, second) => first.id - second.id;
const SortByName = () => {
    const sortedStudents = students.sort(nameSorterFunction);
    displayStudents(sortedStudents);
};
const SortById = () => {
    const sortedStudents = students.sort(idSorterFunction);
    displayStudents(sortedStudents);
};
const fillNationalities = (students) => {
    const filter = document.getElementById("nationality-filter");
    if (!filter)
        return;
    const nationalities = new Set();
    for (const student of students) {
        nationalities.add(student.nationality);
    }
    for (const nationality of nationalities) {
        const option = document.createElement("option");
        option.value = nationality;
        option.innerHTML = nationality;
        filter.appendChild(option);
    }
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.innerHTML = "All";
    filter.appendChild(allOption);
};
const applyFilter = () => {
    const nationalityElement = document.getElementById("nationality-filter");
    if (!nationalityElement)
        return;
    const selectedNationality = nationalityElement.value;
    let filteredStudents = students;
    if (selectedNationality !== "all") {
        filteredStudents = filteredStudents.filter(student => student.nationality === selectedNationality);
    }
    displayStudents(filteredStudents);
};
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data1/students.json";
    const response = yield fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = yield response.json();
    return data;
});
const displayStudents = (students) => {
    const container = document.getElementById("student-container");
    if (!container)
        return;
    container.innerHTML = "";
    for (const student of students) {
        const studentRow = generateStudentRow(student);
        container.appendChild(studentRow);
    }
};
const generateStudentRow = (student) => {
    const row = document.createElement("div");
    row.classList.add("student-row");
    const idCell = document.createElement("div");
    idCell.classList.add("student-data", "student-id");
    idCell.innerHTML = student.id.toString();
    row.appendChild(idCell);
    const nameCell = document.createElement("div");
    nameCell.classList.add("student-data", "student-name");
    nameCell.innerHTML = student.name;
    row.appendChild(nameCell);
    const surnameCell = document.createElement("div");
    surnameCell.classList.add("student-data", "student-surname");
    surnameCell.innerHTML = student.surname;
    row.appendChild(surnameCell);
    const emailCell = document.createElement("div");
    emailCell.classList.add("student-data", "student-email");
    emailCell.innerHTML = student.email;
    row.appendChild(emailCell);
    const nationalityCell = document.createElement("div");
    nationalityCell.classList.add("student-data", "student-nationality");
    nationalityCell.innerHTML = student.nationality;
    row.appendChild(nationalityCell);
    const SubjectCell = document.createElement("div");
    SubjectCell.classList.add("student-data", "student-biblio");
    SubjectCell.addEventListener("click", () => {
        const modal = document.getElementById("subject-details");
        modal.classList.remove("hidden");
        const modalHeader = document.querySelector("#subject-details-content h2");
        modalHeader.innerText = `Selected Subject for ${student.name}`;
        const subjectList = document.getElementById("subject-details-list");
        subjectList.innerHTML = "";
        for (const subject of student.Subject) {
            const subjectItem = document.createElement("li");
            subjectItem.innerText = `${subject.name} (${subject.grade})`;
            subjectList.appendChild(subjectItem);
        }
    });
    row.appendChild(SubjectCell);
    return row;
};
