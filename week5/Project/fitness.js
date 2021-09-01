const neckButton = document.querySelector(".neck");
const shoulderButton = document.querySelector(".shoulders");
const chestButton = document.querySelector(".chest");
const backButton = document.querySelector(".back");
const upperArmButton = document.querySelector(".upperArms");
const lowerArmButton = document.querySelector(".lowerArms");
const absButton = document.querySelector(".abs");
const upperLegButton = document.querySelector(".upperLegs");
const lowerLegButton = document.querySelector(".lowerLegs");
const cardioButton = document.querySelector(".cardio");

neckButton.addEventListener("click", (e) => {fetchData(e.target.id)});
shoulderButton.addEventListener("click", (e) => {fetchData(e.target.id)});
chestButton.addEventListener("click", (e) => {fetchData(e.target.id)});
backButton.addEventListener("click", (e) => {fetchData(e.target.id)});
upperArmButton.addEventListener("click", (e) => {fetchData(e.target.id)});
lowerArmButton.addEventListener("click", (e) => {fetchData(e.target.id)});
absButton.addEventListener("click", (e) => {fetchData(e.target.id)});
upperLegButton.addEventListener("click", (e) => {fetchData(e.target.id)});
lowerLegButton.addEventListener("click", (e) => {fetchData(e.target.id)});
cardioButton.addEventListener("click", (e) => {fetchData(e.target.id)});

async function fetchData(typeOfExercise) {
  const container = document.querySelector(".fitness-container");
  container.innerHTML = "";
  const data = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodypart/${typeOfExercise}`,
    {
      headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "8ce834238amsha780e3957dbbb17p124a1ajsn01b01291ce4d",
      },
    }
  );
  const json = await data.json();

  for (let exercise of json) {
    const exerciseName = document.createElement("h3");
    const exerciseEquipment = document.createElement("h3");
    const exerciseGif = document.createElement("img");
    
    exerciseName.innerText = exercise.name;
    exerciseEquipment.innerText = exercise.equipment;
    exerciseGif.src = exercise.gifUrl;
    container.append(exerciseName, exerciseEquipment, exerciseGif);
  }
}
const toggleMen = document.querySelector(".toggleMenu")
const navLinks = document.querySelector(".navLinks")

toggleMen.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})
