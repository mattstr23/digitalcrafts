const apiKey = "8644e34e";
const movieDB = `http://www.omdbapi.com/?apikey=${apiKey}`;

const plaqContainer = document.querySelector(".moviePlaq");
const searchButton = document.querySelector(".searchButton");

async function moviePull() {
    plaqContainer.innerHTML = "";
    const input = document.querySelector(".search");
    const fetchMovie = await fetch(movieDB + `&s=${input}`);
    const jsonMovie = await fetchMovie.json();
    console.table(jsonMovie)


}