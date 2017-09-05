/**
 * Title        :   Main Server Side Application
 * Author       :   Julien Bongars
 * Date         :   31/08/2017
 * Comments     :   Main Application for server side application
 */

"use strict";
console.log("Starting...");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname);
console.log(__dirname + "/../client/");
const NODE_PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/../client/"));


app.use(function(req, res) {
    res.send("<h1>Error: 404</h1>");
});

app.listen(NODE_PORT, function() {
    console.log("Web App started at " + NODE_PORT);
});

module.exports = app