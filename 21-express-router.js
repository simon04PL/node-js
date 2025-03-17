const express = require('express');
const path = require('path');
const app = express();

//load static file
app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs'); 

//redirect to file
const people= require('./routes/people');

//use middleware
app.use('/people', people);

//load a site to server on port 8000
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});