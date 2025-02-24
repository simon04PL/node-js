const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'login.html'));
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('Successfully posted data');
});

app.listen(8000);