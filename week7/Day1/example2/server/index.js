const express = require("express");
const app = express();
const PORT = 3010;

//middleware
app.use(express.json());

//Create
app.post("/create_todo", (req,res) => {
    res.send("/create_todo");
});

//Read
app.get("/get_todo", (req,res) => {
    res.send("/get_todo");
});

//Update
app.put("/update_todo", (req,res) => {
    res.send("/update_todo");
});

//Delete
app.post("/delete_todo", (req,res) => {
    res.send("/delete_todo");
});

//middleware
app.listen(PORT, console.log(`Listening on ${PORT}`));