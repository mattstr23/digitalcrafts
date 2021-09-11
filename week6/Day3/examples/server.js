
const express = require("express")
const app = express()

app.use(express.json());


app.post("/sendUserData", (req,res) => {
    req.body

})