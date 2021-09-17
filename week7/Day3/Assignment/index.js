const Sequelize = require("sequelize");
const {ToDo} = require("./Server/models");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3015;

app.use(express.json());
app.use(cors());

//Middleware

//Add
app.post("/add_ToDo", async (req,res) => {
    const {actualToDo} = req.body;
    const newToDo = await ToDo.create({actualToDo});
    res.send(newToDo);
});
//Show ToDos
app.post("/", async (req, res) => {
    const toDo = await ToDo.findAll({
    attributes: ["id","actualToDo","updatedAt"],
    });
    res.send(toDo)
});
//Delete
app.post("/delete_ToDo/:id", async (req, res) => {
    const deleteToDo = await ToDo.destroy({where: {id: req.params.id,}});
    res.send(deleteToDo);
});
//Update
app.post("/update_ToDo/:id", async (req, res) => {
    const updateToDo = await ToDo.update(req.body, {where: {id: req.params.id,}});
    res.send(updateToDo);
});
//End Middleware

app.listen(PORT, console.log(`Listening on ${PORT}`));
