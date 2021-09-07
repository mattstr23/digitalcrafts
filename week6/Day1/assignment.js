const express = require('express')
const cowsay = require("cowsay");
const PORT = 3000

const app = express()

app.post("/sendCowUserName",(req,res) => {
    res.send(cowsay.say({
        text : "Adding Cow User",
        e : "oO",
        T : "U ",
    }))
});
app.post("/sendCowAppointment",(req,res) => {
    res.send(cowsay.say({
        text : "Setting up cow appointment",
        e : "oO",
        T : "U ",
    }))
});
app.get("/getCowUserName",(req,res) => {
    res.send(cowsay.say({
        text : "Adding Cow User",
        e : "oO",
        T : "U ",
    }))
});
app.get("/getCowAppointment",(req,res) => {
    res.send(cowsay.say({
        text : "Setting up cow appointment",
        e : "oO",
        T : "U ",
    }))
});
app.delete("/deleteCowUser",(req,res) => {
    res.send((console.log("Its been Deleted")))
});

app.listen(`${PORT}`, console.log(`Im on port ${PORT}`))