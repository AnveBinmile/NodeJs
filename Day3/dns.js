const dns = require("dns");
const w3 = dns.lookup("w3schools.com", function (err, addresses, family) {
  if (err) {
    console.log(err);
  } else {
    console.log(addresses, " : ", family);
  }
});

dns.resolve("www.geeksforgeeks.org", "", (err, addresses) => {
  // dns.resolve('www.geeksforgeeks.org','A', (err, addresses) => {

  if (err) throw err;
  console.log(addresses);
  // console.log(`addresses: ${JSON.stringify(addresses)}`);
});

  