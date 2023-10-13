const zlib = require('zlib');
const fs = require('fs');


const gzip = zlib.createGzip();
const r = fs.createReadStream()  