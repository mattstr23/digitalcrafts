const express = require("express");
const app = express();
const creds = require("./db");

app.use(express.json());
const PORT = 3000;

//Cars 
app.get("/showCars", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM cars", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

//Orders
app.get("/showOrders", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM orders", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

//Customers
app.get("/showCustomers", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM customers", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

  app.listen(PORT, console.log(`Listening on ${PORT}`));
