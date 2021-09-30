const Dictionary = require('./Dictionary');

var hello = 'Hello World!';
console.log(hello);

var d = new Dictionary();
d.add('test', 111);

console.log(d.find('test'));

// console.log(d);
