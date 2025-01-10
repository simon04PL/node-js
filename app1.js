//connection to the module tutorial.js
const tutorial1 = require('./tutorial1');
const tutorial2 = require('./tutorial2');
const tutorial3 = require('./tutorial3');

//use the function sum from tutorial1.js 
console.log(tutorial1(1,1));

//execute all the functions from tutorial2.js
console.log(tutorial2);

//use the function sum from tutorial2.js
console.log(tutorial2.sum(1,1));
console.log(tutorial2.PI);
console.log(new tutorial2.SomeMathObject());

//use the function sum from tutorial3.js
console.log(tutorial3.sum(1,1));
console.log(tutorial3.PI);
console.log(new tutorial3.SomeMathObject());