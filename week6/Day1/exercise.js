const express = require('express')
const PORT = 3000

const app = express();

app.use(express.json())

app.get("/",(req,res) => {
    res.send(`<h1>Hello World<h1>`);
});
app.post("/cats",(req,res) => {
    res.send(`<h1>Meow!</h1>`);
});
app.delete("/dogs",(req,res) => {
    res.send(`<h1>Woof!</h1>`);
});
app.put("/cats_and_dogs",(req,res) => {
    res.send(`<h1>Dogs and cats living together...mass hysteria!!<h1>`);
});


app.listen(`${PORT}`, console.log(`Im on port ${PORT}`));