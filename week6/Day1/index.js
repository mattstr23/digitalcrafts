const express = require('express');
const cowsay = require("cowsay");

const app = express();

app.get("/",(req,res) => {
    res.send("Howdy");
});

app.listen(3000, console.log("Im on port 3000"));
// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));