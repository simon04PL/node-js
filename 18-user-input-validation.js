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
