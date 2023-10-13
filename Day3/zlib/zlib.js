const zlib = require('zlib');
const fs = require('fs');


const gzip = zlib.createGzip();
const r = fs.createReadStream('./demofile.txt');
const w = fs.createWriteStream('./mzip.txt.gz');
r.pipe(gzip).pipe(w);

const gzib=zlib.createUnzip()
r=fs.createReadStream("./public/input.txt")
w=fs.createWriteStream("./public/output.txt")
r.pipe(gzib).pipe(w);