//Basic Needs
require("dotenv").config();
const express = require("express");
const API = process.env.API_TOKEN;
const URL = process.env.URL;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, API);

const PORT = 3000;

const app = express();
app.use(express.json());
//End of basic JS DB Needs

//Begin Routes

//Add stock
app.post("/createStock", async (req, res) => {
    const { data, error } = await supabase
    .from("Stonkz")
    .insert(req.body);
    res.send(console.log(`Stock ${req.body.name} added @ ${req.body.price}`));
});

//Check all stocks
app.get("/checkStocks", async (req, res) => {
    const { data, error } = await supabase
    .from("Stonkz")
    .select();
    res.send(data);
    console.log(`Your stock data is viewable`)
});

//View by stock name
app.get("/checkStocksBy/name", async (req, res) => {
    const { data, error } = await supabase
    .from("Stonkz")
    .select("name");
    res.send(data);
    console.log(`Stock name has been pulled by Name`);
    
});

// View stock by ticker
app.get("/viewStocksBy/ticker", async(req,res)=>{
    const { data, error } = await supabase
    .from("Stonksz")
    .select("ticker");
    res.send(data);
    console.log("Stock has been pulled by Ticker")
})

//Update Stock
app.put("/updateStock/:stockId", async (req, res) => {
    const id = req.params.studentId;
    const { data, error } = await supabase
    .from("Stonkz")
    .update(req.body)
    .match({ id: id });
    res.send(data);
    console.log("Stock updated")
});

//Delete Stock
app.delete("/deleteStock/:stockId", async (req, res) => {
    const id = req.params.stockId;
    const { data, error } = await supabase
    .from("Stonkz")
    .delete()
    .match({ id: id });
    res.send(data);
    console.log("Stock deleted")
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
  
