const EventEmitter = require('events');

const eventEmmiter = new EventEmitter();

//emiter function
eventEmmiter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmmiter.emit('tutorial',1,2);


//emmiter class
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

//create object
let simon = new Person('Simon');
let marta = new Person('Marta');

//listen to event
simon.on('name', () => {
    console.log('my name is ' + simon.name);

});

marta.on('name', () => {
    console.log('my name is ' + marta.name);

});

//emit 
simon.emit('name');
marta.emit('name');