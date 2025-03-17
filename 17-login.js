const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();
// serving static files from the static folder
app.use('/public', express.static(path.join(__dirname, 'static')));

//download form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//download login view file to homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'));
});


app.post('/', (req, res) => {
    console.log('Received body:', req.body);

    let parsedBody;
    //check if array. If yes donvert for readable frendly type
    if (Array.isArray(req.body)) {
        parsedBody = req.body.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
        }, {});
    } else {
        parsedBody = req.body;
    }

    //writ data in console
    console.log('Parsed body:', parsedBody);

    //check if validate data
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    //check if everything is ok
    const { error, value } = schema.validate(parsedBody);

    //throw an error
    if (error) {
        console.log(error);
        return res.status(400).send('Validation error');
    }

    //give feedback
    console.log('Validated data:', value);
    res.send('Success');
});

//load a site to server on port 8000
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
