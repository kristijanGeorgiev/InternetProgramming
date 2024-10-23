interface Subject {
    name: string;
    grade: string;
}

interface Student {
    id: number;
    name: string;
    surname: string;
    email: string;
    nationality: string;
    bibliography: Subject[];
}

type StudentSorter = (first: Student, second: Student) => number;

document.addEventListener("DOMContentLoaded", setupInfrastructure);

let students: Student[] = [];

async function setupInfrastructure() {
    const data = await loadData();
    students = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter?.addEventListener("click", SortByName);

    const idSort = document.getElementById("sort-id");
    idSort?.addEventListener("click", SortById);

    const applyFilterButton = document.getElementById("apply-filter");
    applyFilterButton?.addEventListener("click", applyFilter);

    const modal = document.getElementById("biblio-details");
    modal?.addEventListener("click", () => {
        modal?.classList.add("hidden");
    });
    fillNationalities(students);
    displayStudents(students);
}

const nameSorterFunction: StudentSorter = (first, second) => first.name.localeCompare(second.name);
const idSorterFunction: StudentSorter = (first, second) => first.id - second.id;

const SortByName = () => {
    const sortedStudents = students.sort(nameSorterFunction);
    displayStudents(sortedStudents);
}

const SortById = () => {
    const sortedStudents = students.sort(idSorterFunction);
    displayStudents(sortedStudents);
}

const fillNationalities = (students: Student[]) => {
    const filter = document.getElementById("nationality-filter");
    if (!filter) return;

    const nationalities = new Set<string>();

    for (const student of students) {
        nationalities.add(student.nationality);
    }

    for (const nationality of nationalities) {
        const option = document.createElement("option");
        option.value = nationality;
        option.innerHTML = nationality;
        filter.appendChild(option);
    }

    // Add "all" option
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.innerHTML = "All";
    filter.appendChild(allOption);
}

const applyFilter = () => {
    const nationalityElement = document.getElementById("nationality-filter") as HTMLSelectElement;
    if (!nationalityElement) return;

    const selectedNationality = nationalityElement.value;
    let filteredStudents = students;

    if (selectedNationality !== "all") {
        filteredStudents = filteredStudents.filter(student => student.nationality === selectedNationality);
    }

    displayStudents(filteredStudents);
}

const loadData = async (): Promise<Student[]> => {
    const dataUri = ""
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data: Student[] = await response.json();
    return data;
}

const displayStudents = (students: Student[]) => {
    const container = document.getElementById("student-container");
    if (!container) return;

    container.innerHTML = "";

    for (const student of students) {
        const studentRow = generateStudentRow(student);
        container.appendChild(studentRow);
    }
}

const generateStudentRow = (student: Student) => {
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

    return row;
}