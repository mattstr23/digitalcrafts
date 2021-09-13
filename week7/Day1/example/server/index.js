const express = require("express");
const app = express();
const creds = require("./db");

app.use(express.json());
const PORT = 3005;

app.get("/getUserData", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM addresses", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

app.post("/getUserData", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    client.query(`INSERT INTO addresses (id,street,zipcode,city) 
    VALUES (${req.body.id},'${req.body.street}',${req.body.zipcode},'${req.body.city}');`, 
    (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result);
    });
  });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));