const apiKey = "8644e34e";
const movieDB = `http://www.omdbapi.com/?apikey=${apiKey}`;

const movieContainer = document.querySelector(".movieContainer");
const searchButton = document.querySelector(".searchButton");

async function moviePull() {
    movieContainer.innerHTML = "";
    const input = document.querySelector(".search").value;
    const fetchMovie = await fetch(movieDB + `&s=${input}`);
    const jsonMovie = await fetchMovie.json();

    for (const movie of jsonMovie.Search) {
        const movieTitle = document.createElement("h4");
        const movieYear = document.createElement("h5")
        const moviePoster = document.createElement("img");
        const movieDiv = document.createElement("div");
        movieDiv.className = "moviePlaq"
        movieTitle.innerHTML = movie.Title;
        moviePoster.src = movie.Poster;
        movieYear.innerHTML = movie.Year;
        movieDiv.append(movieTitle, moviePoster, movieYear);
        movieContainer.append(movieDiv);
    }
}
searchButton.addEventListener("click", () => moviePull())