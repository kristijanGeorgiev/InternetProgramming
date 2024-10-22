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
let authors = [];
function setupInfrastructure() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield loadData();
        authors = data;
        fillNationalities(authors);
        displayAuthors(authors);
        const nameSort = document.getElementById("sort-name");
        nameSort.addEventListener("click", sortByName);
        const idSort = document.getElementById("sort-id");
        idSort.addEventListener("click", sortById);
        const applyFilterButton = document.getElementById("apply-filter");
        applyFilterButton.addEventListener("click", applyFilter);
        const modal = document.getElementById("biblio-details");
        modal.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    });
}
const nameSorter = (first, second) => first.name.localeCompare(second.name);
const idSorter = (first, second) => first.id - second.id;
const sortByName = () => {
    const sortedAuthors = authors.sort(nameSorter);
    displayAuthors(sortedAuthors);
};
const sortById = () => {
    const sortedAuthors = authors.sort(idSorter);
    displayAuthors(sortedAuthors);
};
const fillNationalities = (authors) => {
    const filter = document.getElementById("nationality-filter");
    const nationalities = new Set();
    for (const author of authors) {
        nationalities.add(author.nationality);
    }
    for (const nationality of nationalities) {
        const option = document.createElement("option");
        option.value = nationality;
        option.innerHTML = nationality;
        filter.appendChild(option);
    }
};
const applyFilter = () => {
    const nationalityElement = document.getElementById("nationality-filter");
    const nationality = nationalityElement.value;
    const aliveElement = document.getElementById("alive-filter");
    const alive = aliveElement.value;
    let filteredAuthors = authors;
    if (nationality !== "all") {
        filteredAuthors = filteredAuthors.filter(author => author.nationality === nationality);
    }
    if (alive !== "all") {
        filteredAuthors = filteredAuthors.filter(author => {
            if (alive === "yes") {
                return author.death_date === undefined;
            }
            return !!author.death_date;
        });
    }
    displayAuthors(filteredAuthors);
};
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data/authors.json";
    const response = yield fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = yield response.json();
    return data;
});
const displayAuthors = (authors) => {
    const container = document.getElementById("author-container");
    container.innerHTML = "";
    for (const author of authors) {
        const authorRow = generateAuthorRow(author);
        container.appendChild(authorRow);
    }
};
const generateAuthorRow = (author) => {
    const row = document.createElement("div");
    row.classList.add("author-row");
    const idCell = document.createElement("div");
    idCell.classList.add("author-data", "author-id");
    idCell.innerHTML = author.id.toString();
    row.appendChild(idCell);
    const nameCell = document.createElement("div");
    nameCell.classList.add("author-data", "author-name");
    nameCell.innerHTML = author.name;
    row.appendChild(nameCell);
    const bdateCell = document.createElement("div");
    bdateCell.classList.add("author-data", "author-bdate");
    bdateCell.innerHTML = author.birth_date;
    row.appendChild(bdateCell);
    const aliveCell = document.createElement("div");
    aliveCell.classList.add("author-data", "author-alive");
    aliveCell.innerHTML = author.death_date ? "No" : "Yes";
    row.appendChild(aliveCell);
    const ageCell = document.createElement("div");
    ageCell.classList.add("author-data", "author-age");
    ageCell.innerHTML = getAuthorAge(author).toString();
    row.appendChild(ageCell);
    const nationalityCell = document.createElement("div");
    nationalityCell.classList.add("author-data", "author-nationality");
    nationalityCell.innerHTML = author.nationality;
    row.appendChild(nationalityCell);
    const biblioCell = document.createElement("div");
    biblioCell.classList.add("author-data", "author-biblio");
    biblioCell.innerHTML = `The author has ${author.bibliography.length} books`;
    biblioCell.addEventListener("click", () => {
        const modal = document.getElementById("biblio-details");
        modal.classList.remove("hidden");
        const modalHeader = document.querySelector("#biblio-details-content h2");
        modalHeader.innerText = `Selected bibliography for ${author.name}`;
        const bookList = document.getElementById("biblio-details-book-list");
        bookList.innerHTML = "";
        for (const book of author.bibliography.sort((first, second) => first.year - second.year)) {
            const bookItem = document.createElement("li");
            bookItem.innerText = `${book.name} (${book.year})`;
            bookList.appendChild(bookItem);
        }
    });
    row.appendChild(biblioCell);
    const yearsActiveCell = document.createElement("div");
    yearsActiveCell.classList.add("author-data", "author-years");
    yearsActiveCell.innerHTML = "----";
    row.appendChild(yearsActiveCell);
    return row;
};
const getAuthorAge = (author) => {
    const birthYear = new Date(author.birth_date).getFullYear();
    if (author.death_date) {
        const deathYear = new Date(author.death_date).getFullYear();
        return deathYear - birthYear;
    }
    else {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
};
