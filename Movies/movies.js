"use strict";
document.addEventListener("DOMContentLoaded", setupInfrastructure);
let movies = [];
async function setupInfrastructure() {
    const data = await loadData();
    movies = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
    const idSort = document.getElementById("sort-id");
    idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
    const castModal = document.getElementById("cast-details");
    castModal === null || castModal === void 0 ? void 0 : castModal.addEventListener("click", (event) => {
        if (event.target === castModal)
            castModal.classList.add("hidden");
    });
    const oscarModal = document.getElementById("oscar-details");
    oscarModal === null || oscarModal === void 0 ? void 0 : oscarModal.addEventListener("click", (event) => {
        if (event.target === oscarModal)
            oscarModal.classList.add("hidden");
    });
    displaymovies(movies);
}
const nameSorterFunction = (first, second) => first.title.localeCompare(second.title);
const idSorterFunction = (first, second) => first.id - second.id;
const SortByName = () => {
    const sortedmovies = movies.sort(nameSorterFunction);
    displaymovies(sortedmovies);
};
const SortById = () => {
    const sortedmovies = movies.sort(idSorterFunction);
    displaymovies(sortedmovies);
};
const loadData = async () => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data6/movies.json";
    const response = await fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = await response.json();
    return data;
};
const displaymovies = (movies) => {
    const container = document.getElementById("movie-container");
    if (!container)
        return;
    container.innerHTML = "";
    for (const movie of movies) {
        const movieRow = generatemovieRow(movie);
        container.appendChild(movieRow);
    }
};
function formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
const generatemovieRow = (movie) => {
    const row = document.createElement("div");
    row.classList.add("movie-row");
    const idCell = document.createElement("div");
    idCell.classList.add("movie-data", "movie-id");
    idCell.innerHTML = movie.id.toString();
    row.appendChild(idCell);
    const titleCell = document.createElement("div");
    titleCell.classList.add("movie-data", "movie-title");
    titleCell.innerHTML = movie.title;
    row.appendChild(titleCell);
    const yearCell = document.createElement("div");
    yearCell.classList.add("movie-data", "movie-year");
    yearCell.innerHTML = movie.year.toString();
    row.appendChild(yearCell);
    const directorCell = document.createElement("div");
    directorCell.classList.add("movie-data", "movie-director");
    directorCell.innerHTML = movie.director;
    row.appendChild(directorCell);
    const genreCell = document.createElement("div");
    genreCell.classList.add("movie-data", "movie-genre");
    genreCell.innerHTML = movie.genre;
    row.appendChild(genreCell);
    const plotCell = document.createElement("div");
    plotCell.classList.add("movie-data", "movie-plot");
    plotCell.innerHTML = movie.plot;
    row.appendChild(plotCell);
    const ratingCell = document.createElement("div");
    ratingCell.classList.add("movie-data", "movie-rating");
    ratingCell.innerHTML = movie.rating.toString();
    row.appendChild(ratingCell);
    const oscarCell = document.createElement("div");
    oscarCell.classList.add("movie-data", "movie-oscar");
    oscarCell.innerText = "View Oscars";
    oscarCell.addEventListener("click", () => {
        const oscarModal = document.getElementById("oscar-details");
        oscarModal.classList.remove("hidden");
        const oscarHeader = document.querySelector("#oscar-details-content h2");
        oscarHeader.innerText = `Oscars for ${movie.title}`;
        const oscarList = document.getElementById("oscar-details-list");
        oscarList.innerHTML = "";
        for (const [award, winner] of Object.entries(movie.oscars)) {
            const oscarItem = document.createElement("li");
            oscarItem.innerText = `${formatKey(award)}: ${winner}`;
            oscarList.appendChild(oscarItem);
        }
    });
    row.appendChild(oscarCell);
    const castCell = document.createElement("div");
    castCell.classList.add("movie-data", "movie-cast");
    castCell.innerText = "View Cast";
    castCell.addEventListener("click", () => {
        const castModal = document.getElementById("cast-details");
        castModal.classList.remove("hidden");
        const castHeader = document.querySelector("#cast-details-content h2");
        castHeader.innerText = `Cast for ${movie.title}`;
        const castList = document.getElementById("cast-details-list");
        castList.innerHTML = "";
        for (const cast of movie.cast) {
            const castItem = document.createElement("li");
            castItem.innerText = `${cast.actor} as ${cast.character}`;
            castList.appendChild(castItem);
        }
    });
    row.appendChild(castCell);
    return row;
};
