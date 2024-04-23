//Express Package
const express = require('express');

//App Creation
const app = express();

//Config
let port = 3000;
let host = 'localhost';

//Setting up routes for all pages
app.get('/', (req, res) =>{
    //Index page EJS
    res.render('index');
});