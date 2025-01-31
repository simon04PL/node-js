const express = require('express');
const app = express();

//creating homepage route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//creating about page route
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

//creating example page route
app.get('/example', (req, res) => {
    res.send('Hitting example route');
});

//creating example data page route
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});