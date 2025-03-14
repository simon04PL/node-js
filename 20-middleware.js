const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    req.bannana = 'banana';
    next();
});

app.get('/',(req,res) => {
    console.log(req.bannana);
    res.send('Middleware');
});

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});