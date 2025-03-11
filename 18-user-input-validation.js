const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3' }];

const userInput = { 
    personalInfo: { 
        streetAddress: '123987',
        city: 'NY',
        state: 'NY'
    }, 
    preferences: arrayObjects
};

const personalInfoSchema = Joi.object().keys ({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(
    Joi.object().keys({
        example: Joi.string().required()
    })
);

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

const { error, value } = schema.validate(userInput); 

if (error) {
    console.log(error);
} else {
    console.log(value);
}