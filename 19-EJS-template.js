const express = require('express');
const path = require('path');
const app = express();

// serving static files from the static folder
app.use('/public', express.static(path.join(__dirname, 'static')));
//define ejs view engine
app.set('view engine', 'ejs'); 
//create custom url with any word
app.get('/:userQuery', (req, res) => {
    //transfer data to ejs
    res.render('index', { data: { userQuery: req.params.userQuery,
                                searchResults: ['book1', 'book2', 'book3'],
                                loggedIn: true,
                                username: 'Simon'} });
});

//load a site to server on port 8000
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});