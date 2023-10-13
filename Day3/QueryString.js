var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year, q.month );
