const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var newTable = require("./data/tabledata");

app.get(["/", "/home"], function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
  });

  app.get("/api/tables", function(req, res){
      res.json(newTable);
  });

  app.post("/api/tables", function(req, res) {
    console.log(req.body);
    var table = req.body;
    newTable.push(table);
    res.json(table);
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  