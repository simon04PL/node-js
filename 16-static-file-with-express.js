const express = require('express');
const path = require('path');
const app = express();

//serving static files from the static folder
app.use('/public', express.static(path.join(__dirname, 'static')));

//download a hatml file
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//load a site to server on port 8000
app.listen(8000);