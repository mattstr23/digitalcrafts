const Sequelize = require("sequelize");
const { Users } = require("./models");
const express = require("express");
const app = express();
const PORT = 3020;

app.post("/create_users", async (req,res) => {
    const {firstName, lastName, email} = req.body
    
    const newUser = await Users.create({
        firstName,
        lastName,
        email,
    });
    res.send({
        id: newUser.id,
    });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));