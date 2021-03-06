const http = require('http');
const path = require('path');
const express = require("express");

const app = express();


let items = [
    {col1:'1',col2:'<%= %>'},
    {col1:'2',col2:'<%- %>'},
    {col1:'3',col2:'<% %>'},
    {col1:'4', col2: '<% %>'}
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){    
    res.render('index',{ tabledata : items , title : "Rendering value into template", name: "Sagun"});
});

app.listen(3000);