var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener("DOMContentLoaded", setupInfrastructure);
var employees = [];
function setupInfrastructure() {
    return __awaiter(this, void 0, void 0, function () {
        var data, nameSorter, idSort, applyFilterButton, modal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadData()];
                case 1:
                    data = _a.sent();
                    employees = data;
                    nameSorter = document.getElementById("sort-name");
                    nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
                    idSort = document.getElementById("sort-id");
                    idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
                    applyFilterButton = document.getElementById("apply-filter");
                    applyFilterButton === null || applyFilterButton === void 0 ? void 0 : applyFilterButton.addEventListener("click", applyFilter);
                    modal = document.getElementById("workhistory-details");
                    modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", function () {
                        modal === null || modal === void 0 ? void 0 : modal.classList.add("hidden");
                    });
                    fillOffices(employees);
                    displayEmployees(employees);
                    return [2 /*return*/];
            }
        });
    });
}
var nameSorterFunction = function (first, second) { return first.name.localeCompare(second.name); };
var idSorterFunction = function (first, second) { return first.id - second.id; };
var SortByName = function () {
    var sortedEmployees = employees.sort(nameSorterFunction);
    displayEmployees(sortedEmployees);
};
var SortById = function () {
    var sortedEmployees = employees.sort(idSorterFunction);
    displayEmployees(sortedEmployees);
};
var fillOffices = function (employees) {
    var filter = document.getElementById("office-filter");
    if (!filter)
        return;
    var offices = new Set();
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        offices.add(employee.office);
    }
    for (var _a = 0, offices_1 = offices; _a < offices_1.length; _a++) {
        var office = offices_1[_a];
        var option = document.createElement("option");
        option.value = office;
        option.innerHTML = office;
        filter.appendChild(option);
    }
    var allOption = document.createElement("option");
    allOption.value = "all";
    allOption.innerHTML = "All";
    filter.appendChild(allOption);
};
var applyFilter = function () {
    var officeElement = document.getElementById("office-filter");
    if (!officeElement)
        return;
    var selectedOffice = officeElement.value;
    var filteredEmployees = employees;
    if (selectedOffice !== "all") {
        filteredEmployees = filteredEmployees.filter(function (employee) { return employee.office === selectedOffice; });
    }
    displayEmployees(filteredEmployees);
};
var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var dataUri, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data2/employee.json";
                return [4 /*yield*/, fetch(dataUri)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("The data is not there");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var displayEmployees = function (employee) {
    var container = document.getElementById("employee-container");
    if (!container)
        return;
    container.innerHTML = "";
    for (var _i = 0, employees_2 = employees; _i < employees_2.length; _i++) {
        var employee_1 = employees_2[_i];
        var employeeRow = generateEmployeeRow(employee_1);
        container.appendChild(employeeRow);
    }
};
var generateEmployeeRow = function (employee) {
    var row = document.createElement("div");
    row.classList.add("employee-row");
    var idCell = document.createElement("div");
    idCell.classList.add("employee-data", "employee-id");
    idCell.innerHTML = employee.id.toString();
    row.appendChild(idCell);
    var nameCell = document.createElement("div");
    nameCell.classList.add("employee-data", "employee-name");
    nameCell.innerHTML = employee.name;
    row.appendChild(nameCell);
    var surnameCell = document.createElement("div");
    surnameCell.classList.add("employee-data", "employee-surname");
    surnameCell.innerHTML = employee.surname;
    row.appendChild(surnameCell);
    var emailCell = document.createElement("div");
    emailCell.classList.add("employee-data", "employee-email");
    emailCell.innerHTML = employee.email;
    row.appendChild(emailCell);
    var officeCell = document.createElement("div");
    officeCell.classList.add("employee-data", "employee-office");
    officeCell.innerHTML = employee.office;
    row.appendChild(officeCell);
    var WorkHistoryCell = document.createElement("div");
    WorkHistoryCell.classList.add("employee-data", "employee-workhistory");
    WorkHistoryCell.addEventListener("click", function () {
        var modal = document.getElementById("workhistory-details");
        modal.classList.remove("hidden");
        var modalHeader = document.querySelector("#workhistory-details-content h2");
        modalHeader.innerText = "Selected WorkHistory for ".concat(employee.name);
        var workhistoryList = document.getElementById("workhistory-details-list");
        workhistoryList.innerHTML = "";
        for (var _i = 0, _a = employee.WorkHistory; _i < _a.length; _i++) {
            var workhistory = _a[_i];
            var workhistoryItem = document.createElement("li");
            workhistoryItem.innerText = "".concat(workhistory.company, " (").concat(workhistory.fromyear, ") (").concat(workhistory.toyear, ")");
            workhistoryList.appendChild(workhistoryItem);
        }
    });
    row.appendChild(WorkHistoryCell);
    return row;
};
