interface Books {
    name: string;
    editions: string;
    language: string;
}

interface writer {
    id: number;
    name: string;
    surname: string;
    email: string;
    nationality: string;
    genre: string;
    Books: Books[];
}

type writerSorter = (first: writer, second: writer) => number;

document.addEventListener("DOMContentLoaded", setupInfrastructure);

let writers: writer[] = [];

async function setupInfrastructure() {
    const data = await loadData();
    writers = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter?.addEventListener("click", SortByName);

    const idSort = document.getElementById("sort-id");
    idSort?.addEventListener("click", SortById);

    const applyFilterButton = document.getElementById("apply-filter");
    applyFilterButton?.addEventListener("click", applyFilter);

    const modal = document.getElementById("book-details");
    modal?.addEventListener("click", () => {
        modal?.classList.add("hidden");
    });
    fillNationalities(writers);
    displaywriters(writers);
}

const nameSorterFunction: writerSorter = (first, second) => first.name.localeCompare(second.name);
const idSorterFunction: writerSorter = (first, second) => first.id - second.id;

const SortByName = () => {
    const sortedwriters = writers.sort(nameSorterFunction);
    displaywriters(sortedwriters);
}

const SortById = () => {
    const sortedwriters = writers.sort(idSorterFunction);
    displaywriters(sortedwriters);
}

const fillNationalities = (writers: writer[]) => {
    const filter = document.getElementById("nationality-filter");
    if (!filter) return;

    const nationalities = new Set<string>();

    for (const writer of writers) {
        nationalities.add(writer.nationality);
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
}

const applyFilter = () => {
    const nationalityElement = document.getElementById("nationality-filter") as HTMLSelectElement;
    if (!nationalityElement) return;

    const selectedNationality = nationalityElement.value;
    let filteredwriters = writers;

    if (selectedNationality !== "all") {
        filteredwriters = filteredwriters.filter(writer => writer.nationality === selectedNationality);
    }

    displaywriters(filteredwriters);
}

const loadData = async (): Promise<writer[]> => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data5/pisateli.json"
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data: writer[] = await response.json();
    return data;
}

const displaywriters = (writers: writer[]) => {
    const container = document.getElementById("writer-container");
    if (!container) return;

    container.innerHTML = "";

    for (const writer of writers) {
        const writerRow = generatewriterRow(writer);
        container.appendChild(writerRow);
    }
}

const generatewriterRow = (writer: writer) => {
    const row = document.createElement("div");
    row.classList.add("writer-row");

    const idCell = document.createElement("div");
    idCell.classList.add("writer-data", "writer-id");
    idCell.innerHTML = writer.id.toString();
    row.appendChild(idCell);

    const nameCell = document.createElement("div");
    nameCell.classList.add("writer-data", "writer-name");
    nameCell.innerHTML = writer.name;
    row.appendChild(nameCell);

    const surnameCell = document.createElement("div");
    surnameCell.classList.add("writer-data", "writer-surname");
    surnameCell.innerHTML = writer.surname;
    row.appendChild(surnameCell);

    const emailCell = document.createElement("div");
    emailCell.classList.add("writer-data", "writer-email");
    emailCell.innerHTML = writer.email;
    row.appendChild(emailCell);

    const nationalityCell = document.createElement("div");
    nationalityCell.classList.add("writer-data", "writer-nationality");
    nationalityCell.innerHTML = writer.nationality;
    row.appendChild(nationalityCell);

    const genreCell = document.createElement("div");
    genreCell.classList.add("writer-data", "writer-genre");
    genreCell.innerHTML = writer.genre;
    row.appendChild(genreCell);

    const bookCell = document.createElement("div");
    bookCell.classList.add("writer-data", "writer-book");
    bookCell.addEventListener("click", () => {
        const modal = document.getElementById("book-details")!;
        modal.classList.remove("hidden");

        const modalHeader = document.querySelector("#book-details-content h2")! as HTMLHeadingElement;
        modalHeader.innerText = `Selected book for ${writer.name}`;

        const bookList = document.getElementById("book-details-list")! as HTMLUListElement;
        bookList.innerHTML = "";
        for (const book of writer.Books) {
            const bookItem = document.createElement("li");
            bookItem.innerText = `${book.name} (${book.editions} ${book.language})`;
            bookList.appendChild(bookItem);
        }
    })
    row.appendChild(bookCell);
    return row;
}