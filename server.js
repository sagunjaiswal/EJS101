const http = require('http');
const path = require('path');
const express = require("express");

const app = express();

let bullets = ["bullet1", "bullet2", "bullet3"];
let items = [
    {col1:'1',col2:'<%= %>'},
    {col1:'2',col2:'<%- %>'},
    {col1:'3',col2:'<% %>'},
    {col1:'4', col2: '<% %>'}
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){    
    res.render('home',{ tabledata : items , title : "Rendering value into template", name: "Sagun", bullets: bullets});
});

app.listen(3000);