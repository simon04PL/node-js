const EventEmitter = require('events');

const eventEmmiter = new EventEmitter();

eventEmmiter.on('tutorial1', () => {
    console.log('tutorial event has occurred');
});