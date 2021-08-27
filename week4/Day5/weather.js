const apiKey = "1d407c7c1070881a6b0b23280f301bdf";
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;

const weatherContainer = document.querySelector(".weatherContainer");
const subButton = document.querySelector(".subButton");

async function getWeather() {
    weatherContainer.innerHTML = ""
    const input = document.querySelector(".input").value;
    const fetchWeather = await fetch(weatherApi + `&q=${input}`);
    const jsonWeather = await fetchWeather.json();
    console.log(jsonWeather)

    const current = document.createElement("h2");
    const currentChoice = jsonWeather.name;
    current.innerHTML = `Currently in ${currentChoice}`;

    const tempSelect = document.createElement("h3");
    const weatherTemp = jsonWeather.main.temp.toFixed(0);
    tempSelect.innerHTML = `Temp: ${weatherTemp}F`;

    const windSelect = document.createElement("h3");
    const wind = jsonWeather.wind.speed;
    windSelect.innerText = `Winds: ${wind} mph`

    
    
    weatherContainer.append(current, tempSelect, windSelect);

}
subButton.addEventListener("click", () => getWeather());