const express = require("express");
const app = express();
const PORT = 3002;
const student = {name: "Pamela"}
const students = [
    {name: "Pamela"},
    {name: "Matt"},
    {name: "Jenny"},
];

const es6Renderer = require("express-es6-template-engine")
app.engine("html", es6Renderer);
app.set('views', 'templates')
app.set('view engine', 'html')

app.get("/", (req, res) => {
    // let list = `<ul>`
    // for (let student of students){
    //     list += `<li>
    //         <p> ${student.name}</p>
    //     </li>
    //     `
    // }
    // list += `</ul>`;

    // res.render('home',{
    //     locals: {
    //         student
    //     }
    // })
res.render("home", {
    locals: {
        students,
    },
})
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));