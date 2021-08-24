// document object, or just the document

//document.   <---How you access
// COMMANDS TO USE
// BUILT IT METHODS!
//getElementsByTagName('p')
//getElementsByClassName('link')
//getElementsById('password')
//querySelector('#password')
//querySelctorAll('.link')

// document.getElementsByClassName("mainContainer")

// document.getElementsByTagName("div")

// document.querySelector(".mainContainer")   <--- PREFERRED METHOD OF DOC USE

// paper first method:

const container = document.querySelector(".mainContainer");
const input = document.querySelector(".input");
const submitButton = document.querySelector(".submitButton")

const studentName = document.createElement("p");
const valueOfInput = input.value


studentName.innerHTML = "Deanna";
function alertMe() {
    alert("Hi")
}
submitButton

container.append(studentName)