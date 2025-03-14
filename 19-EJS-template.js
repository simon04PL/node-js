const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs'); 
app.get('/:userQuery', (req, res) => {
    res.render('index', { data: { userQuery: req.params.userQuery,
                                searchResults: ['book1', 'book2', 'book3'],
                                loggedIn: true,
                                username: 'Simon'} });
});

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});