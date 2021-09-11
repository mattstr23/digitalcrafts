const express = require("express");
const app = express();
const { createClient }= require("@supabase/supabase-js");
const supabase = createClient(
    "https://mxakcphctxajogkuteth.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
);

const PORT = 3001;

app.use(express.json());

app.post("/createStudent", async (req,res) => {
    const { data, error } = await supabase.from("studentData").insert([req.body]);
    res.send(console.log(`The User is ${req.body.name}`));
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
