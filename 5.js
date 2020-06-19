var name = require('readline-sync');
let str = name.question("enter a string");
console.log(str.split('').sort().join(''));