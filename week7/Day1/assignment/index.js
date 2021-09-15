const express = require("express");
const app = express();
const creds = require("./db");

app.use(express.json());
const PORT = 3003;

//Restaurant

app.get("/showRestaurant", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM restaurants", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

app.post("/addRestaurant", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    client.query(`INSERT INTO restaurants (id,name,city) 
    VALUES (${req.body.id},'${req.body.name}','${req.body.city}');`, 
    (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result);
    });
  });
});

//Movie

app.get("/showMovies", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM movies", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

app.post("/addMovie", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      return console.error("Error getting connected to the client", err.stack);
    }
    client.query(`INSERT INTO movies (id,name) 
    VALUES (${req.body.id},'${req.body.title}');`, 
    (err, result) => {
      if (err) {
        res.status(400).send(err.stack);
      }
      res.status(200).send(result);
    });
  });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
