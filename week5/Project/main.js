const toggleMen = document.querySelector(".toggleMenu")
const navLinks = document.querySelector(".navLinks")

toggleMen.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})
