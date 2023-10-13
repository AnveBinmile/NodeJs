const url = require('url');
const addr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(addr,true);

console.log(q.host);
console.log(q.hostname);
console.log(q.search);

// console.log(q.query);
// console.log(q.query)   