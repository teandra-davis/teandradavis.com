//Express Package
const express = require('express');
//EJS Package
const ejs = require('ejs');
const path = require('path'); // Import the path module

//App Creation
const app = express();

//Config
let port = 3000;
let host = 'localhost';

//Mount the middleware
//So that images, css, and js are found from this folder
app.use(express.static('public'));

//EJS Set Template Engine
app.set('view engine', 'ejs');

//ROUTE SETUP
app.get('/', (req, res) =>{
    //Index page EJS
    res.render('index');
});

//Confirm Server is running; Displays on Server Console
app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
  });