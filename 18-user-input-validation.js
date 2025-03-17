const Joi = require('joi');

//define data
const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3' }];

//define schema of data
const userInput = { 
    personalInfo: { 
        streetAddress: '123987',
        city: 'NY',
        state: 'NY'
    }, 
    preferences: arrayObjects
};

//validation data
const personalInfoSchema = Joi.object().keys ({
    //check if streetAddress is a string, trim (removed white space) it, make it required adn if is provide length
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});


const preferencesSchema = Joi.array().items(
    Joi.object().keys({
        example: Joi.string().required()
    })
);

//write schema to validate data
const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

//check if data is validated
const { error, value } = schema.validate(userInput); 

//give feedback
if (error) {
    console.log(error);
} else {
    console.log(value);
}