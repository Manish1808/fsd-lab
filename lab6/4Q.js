const event = require('events');

const myEmitter = new event.EventEmitter();

myEmitter.once("userDetails",(name,age)=>{
    console.log(`Hello,[${name}]! You are [${age}] years old`);
})

myEmitter.emit("userDetails","saimanish",18);
myEmitter.emit("userDetails","saimanish",18);
