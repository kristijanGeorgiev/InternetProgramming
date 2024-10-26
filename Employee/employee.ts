interface Office {
    company: string;
    fromyear: number;
    toyear: number;
}

interface Employee {
    id: number;
    name: string;
    surname: string;
    email: string;
    office: string;
    WorkHistory: Office[];
}

type EmployeeSorter = (first: Employee, second: Employee) => number;

document.addEventListener("DOMContentLoaded", setupInfrastructure);

let employees: Employee[] = [];

async function setupInfrastructure() {
    const data = await loadData();
    employees = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter?.addEventListener("click", SortByName);

    const idSort = document.getElementById("sort-id");
    idSort?.addEventListener("click", SortById);

    const applyFilterButton = document.getElementById("apply-filter");
    applyFilterButton?.addEventListener("click", applyFilter);

    const modal = document.getElementById("workhistory-details");
    modal?.addEventListener("click", () => {
        modal?.classList.add("hidden");
    });
    fillOffices(employees);
    displayEmployees(employees);
}

const nameSorterFunction: EmployeeSorter = (first, second) => first.name.localeCompare(second.name);
const idSorterFunction: EmployeeSorter = (first, second) => first.id - second.id;

const SortByName = () => {
    const sortedEmployees = employees.sort(nameSorterFunction);
    displayEmployees(sortedEmployees);
}

const SortById = () => {
    const sortedEmployees = employees.sort(idSorterFunction);
    displayEmployees(sortedEmployees);
}

const fillOffices = (employees: Employee[]) => {
    const filter = document.getElementById("office-filter");
    if (!filter) return;

    const offices = new Set<string>();

    for (const employee of employees) {
        offices.add(employee.office);
    }

    for (const office of offices) {
        const option = document.createElement("option");
        option.value = office;
        option.innerHTML = office;
        filter.appendChild(option);
    }
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.innerHTML = "All";
    filter.appendChild(allOption);
}

const applyFilter = () => {
    const officeElement = document.getElementById("office-filter") as HTMLSelectElement;
    if (!officeElement) return;

    const selectedOffice = officeElement.value;
    let filteredEmployees = employees;

    if (selectedOffice !== "all") {
        filteredEmployees = filteredEmployees.filter(employee => employee.office === selectedOffice);
    }

    displayEmployees(filteredEmployees);
}

const loadData = async (): Promise<Employee[]> => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data2/employee.json"
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data: Employee[] = await response.json();
    return data;
}

const displayEmployees = (employee: Employee[]) => {
    const container = document.getElementById("employee-container");
    if (!container) return;

    container.innerHTML = "";

    for (const employee of employees) {
        const employeeRow = generateEmployeeRow(employee);
        container.appendChild(employeeRow);
    }
}

const generateEmployeeRow = (employee: Employee) => {
    const row = document.createElement("div");
    row.classList.add("employee-row");

    const idCell = document.createElement("div");
    idCell.classList.add("employee-data", "employee-id");
    idCell.innerHTML = employee.id.toString();
    row.appendChild(idCell);

    const nameCell = document.createElement("div");
    nameCell.classList.add("employee-data", "employee-name");
    nameCell.innerHTML = employee.name;
    row.appendChild(nameCell);

    const surnameCell = document.createElement("div");
    surnameCell.classList.add("employee-data", "employee-surname");
    surnameCell.innerHTML = employee.surname;
    row.appendChild(surnameCell);

    const emailCell = document.createElement("div");
    emailCell.classList.add("employee-data", "employee-email");
    emailCell.innerHTML = employee.email;
    row.appendChild(emailCell);

    const officeCell = document.createElement("div");
    officeCell.classList.add("employee-data", "employee-office");
    officeCell.innerHTML = employee.office;
    row.appendChild(officeCell);

    const WorkHistoryCell = document.createElement("div");
    WorkHistoryCell.classList.add("employee-data", "employee-workhistory");
    WorkHistoryCell.addEventListener("click", () => {
        const modal = document.getElementById("workhistory-details")!;
        modal.classList.remove("hidden");

        const modalHeader = document.querySelector("#workhistory-details-content h2")! as HTMLHeadingElement;
        modalHeader.innerText = `Selected WorkHistory for ${employee.name}`;

        const workhistoryList = document.getElementById("workhistory-details-list")! as HTMLUListElement;
        workhistoryList.innerHTML = "";
        for (const workhistory of employee.WorkHistory) {
            const workhistoryItem = document.createElement("li");
            workhistoryItem.innerText = `${workhistory.company} (${workhistory.fromyear}) (${workhistory.toyear})`;
            workhistoryList.appendChild(workhistoryItem);
        }
    })
    row.appendChild(WorkHistoryCell);
    return row;
}
