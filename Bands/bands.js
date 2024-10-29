"use strict";
document.addEventListener("DOMContentLoaded", setupInfrastructure);
let MetalBands = [];
async function setupInfrastructure() {
    const data = await loadData();
    MetalBands = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
    const idSort = document.getElementById("sort-id");
    idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
    const AlbumModal = document.getElementById("album-details");
    AlbumModal === null || AlbumModal === void 0 ? void 0 : AlbumModal.addEventListener("click", (event) => {
        if (event.target === AlbumModal)
            AlbumModal.classList.add("hidden");
    });
    const memberModal = document.getElementById("member-details");
    memberModal === null || memberModal === void 0 ? void 0 : memberModal.addEventListener("click", (event) => {
        if (event.target === memberModal)
            memberModal.classList.add("hidden");
    });
    displayMetalBands(MetalBands);
}
const nameSorterFunction = (first, second) => first.name.localeCompare(second.name);
const idSorterFunction = (first, second) => first.id - second.id;
const SortByName = () => {
    const sortedMetalBands = MetalBands.sort(nameSorterFunction);
    displayMetalBands(sortedMetalBands);
};
const SortById = () => {
    const sortedMetalBands = MetalBands.sort(idSorterFunction);
    displayMetalBands(sortedMetalBands);
};
const loadData = async () => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data7/bands.json";
    const response = await fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = await response.json();
    return data.metalBands;
};
const displayMetalBands = (metalBands) => {
    const container = document.getElementById("MetalBands-container");
    if (!container)
        return;
    container.innerHTML = "";
    for (const metalband of metalBands) {
        const metalbandRow = generateMetalBandsRow(metalband);
        container.appendChild(metalbandRow);
    }
};
function formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
const generateMetalBandsRow = (metalBands) => {
    const row = document.createElement("div");
    row.classList.add("MetalBands-row");
    const idCell = document.createElement("div");
    idCell.classList.add("MetalBands-data", "MetalBands-id");
    idCell.innerHTML = metalBands.id.toString();
    row.appendChild(idCell);
    const nameCell = document.createElement("div");
    nameCell.classList.add("MetalBands-data", "MetalBands-name");
    nameCell.innerHTML = metalBands.name;
    row.appendChild(nameCell);
    const formedCell = document.createElement("div");
    formedCell.classList.add("MetalBands-data", "MetalBands-formed");
    formedCell.innerHTML = metalBands.formed.toString();
    row.appendChild(formedCell);
    const genreCell = document.createElement("div");
    genreCell.classList.add("metalBands-data", "metalBands-genre");
    genreCell.innerHTML = metalBands.genre;
    row.appendChild(genreCell);
    const locationCell = document.createElement("div");
    locationCell.classList.add("metalBands-data", "metalBands-location");
    locationCell.innerHTML = metalBands.location;
    row.appendChild(locationCell);
    const memberCell = document.createElement("div");
    memberCell.classList.add("metalBands-data", "metalBands-member");
    memberCell.innerText = "View members";
    memberCell.addEventListener("click", () => {
        const memberModal = document.getElementById("member-details");
        memberModal.classList.remove("hidden");
        const memberHeader = document.querySelector("#member-details-content h2");
        memberHeader.innerText = `Members for ${metalBands.name}`;
        const memberList = document.getElementById("member-details-list");
        memberList.innerHTML = "";
        for (const [award, winner] of Object.entries(metalBands.members)) {
            const memberItem = document.createElement("li");
            memberItem.innerText = `${formatKey(award)}: ${winner}`;
            memberList.appendChild(memberItem);
        }
    });
    row.appendChild(memberCell);
    const AlbumCell = document.createElement("div");
    AlbumCell.classList.add("metalBands-data", "metalBands-Album");
    AlbumCell.innerText = "View Album";
    AlbumCell.addEventListener("click", () => {
        const AlbumModal = document.getElementById("album-details");
        AlbumModal.classList.remove("hidden");
        const AlbumHeader = document.querySelector("#album-details-content h2");
        AlbumHeader.innerText = `Album for ${metalBands.name}`;
        const AlbumList = document.getElementById("album-details-list");
        AlbumList.innerHTML = "";
        for (const Album of metalBands.albums) {
            const AlbumItem = document.createElement("li");
            AlbumItem.innerText = `${Album.name} as ${Album.year}`;
            AlbumList.appendChild(AlbumItem);
        }
    });
    row.appendChild(AlbumCell);
    return row;
};
