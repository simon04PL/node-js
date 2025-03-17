const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//translat4e json to js
app.use(bodyParser.json());

//define middleware
app.use((req, res, next) => {
    req.bannana = 'banana';
    next();
});

//next function to do
app.get('/',(req,res) => {
    console.log(req.bannana);
    res.send('Middleware');
});

//load a site to server on port 8000
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});