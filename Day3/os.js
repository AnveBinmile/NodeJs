const os = require('os');

console.log('CPU architecture  ',os.arch());
console.log('Free Memory ',os.freemem());
console.log('Total Memory ',os.totalmem());
console.log('List of nw interfaces ',os.networkInterfaces());
console.log('Default dir for temp files ',os.tmpdir());
console.log('Operating system ',os.platform());
console.log('OS release', os.release());
console.log('Hostname ',os.hostname());