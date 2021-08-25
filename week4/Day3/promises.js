async function getRandomChuck(){
    const chuckBucket = document.querySelector(".chuckBucket")
    const chuckJoke = document.createElement("h3")
    const chuckImage = document.createElement("img")
    const getChuck = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonChuck = await getChuck.json();
    chuckJoke.innerHTML = jsonChuck.value
    chuckImage.src = jsonChuck.icon_url
    chuckBucket.append(chuckJoke, chuckImage)
}