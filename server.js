/*

File Name: server.js
Student: Dylan Meszaros
StuudentID: 301248995
Date: October 5th, 2023

*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();
app.listen(5000);
module.exports = app;

console.log('Server running at http://localhost:5000/');