const express = require('express');
const route = express.Router();

//create middleware for the route
route.use((req, res, next) => {
    console.log('Middleware being used');
    next();
}
);

//create route for homepage
route.get('/', (req, res) => {
    res.send('/ being hit');
});

//create route for example page
route.get('/example', (req, res) => {
    res.send('/example being hit');
});

//export modules
module.exports = route;