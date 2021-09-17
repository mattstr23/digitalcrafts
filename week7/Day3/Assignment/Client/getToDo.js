const toDoCont = document.querySelector(".toDoCont");

const submitButton = document.querySelector(".subBut");
const viewButton = document.querySelector(".viewBut");
const delButton = document.querySelector(".delBut");
const updateButton = document.querySelector(".updateBut");

const input = document.querySelector(".userInput");
const delNum = document.querySelector(".delNum");
const upNum = document.querySelector(".upNum");
const upTask = document.querySelector(".updateTask");


//Add ToDo
const createToDo = async () => {
    const userInput = input.value
    const userToDo = {actualToDo:userInput}
    const fetchToDo = await fetch("http://localhost:3015/add_ToDo", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(userToDo)
    })
};
//Show ToDos
const showToDo = async () => {
    toDoCont.innerHTML = ""
    const toDoData = await fetch("http://localhost:3015/", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",}
    });
    const json = await toDoData.json();
    for (const toDo of json) {
        const toDoID = toDo.id;
        const toDoName = toDo.actualToDo;
        const update = toDo.updatedAt;
        const toDoLine = document.createElement("div");
        const idNum = document.createElement("p");
        const actToDo = document.createElement("p");
        const newUpdate = document.createElement("p");
        idNum.innerHTML = (`ID: ${toDoID}`);
        actToDo.innerHTML = (`TASK: ${toDoName}`);
        newUpdate.innerHTML = (`UPDATED: ${update}`);
        toDoLine.append(idNum, actToDo, newUpdate);
        toDoCont.append(toDoLine);
    }
};
//Delete
const deleteToDo = async () => {
    const taskID = delNum.value;
    const data = {taskID,}
    const deleteToDo = await fetch(`http://localhost:3015/delete_ToDo/${taskID}`, {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",},
    body: JSON.stringify(data),
    })
};


delButton.addEventListener("click", () => deleteToDo());
viewButton.addEventListener("click", () => showToDo());
submitButton.addEventListener("click", () => createToDo());
