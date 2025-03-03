const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'));
});

app.post('/', (req, res) => {
    console.log('Received body:', req.body);

    // Sprawdzenie czy req.body jest tablicą
    let parsedBody;
    if (Array.isArray(req.body)) {
        parsedBody = req.body.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
        }, {});
    } else {
        parsedBody = req.body;
    }

    console.log('Parsed body:', parsedBody);

    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    const { error, value } = schema.validate(parsedBody);

    if (error) {
        console.log(error);
        return res.status(400).send('Validation error');
    }

    console.log('Validated data:', value);
    res.send('Success');
});

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
