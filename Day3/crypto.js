var crypto = require("crypto");

var mykey = crypto.createCiphervi("aes-128-cbc", "mypassword");
var mystr = mykey.update("abc", "utf8", "hex");
mystr += mykey.final("hex");

console.log(mystr);

var crypto = require("crypto");

var mykey = crypto.createDeciphervi("aes-128-cbc", "mypassword");
var mystr = mykey.update("34feb914c099df25794bf9ccb85bea72", "hex", "utf8");
mystr += mykey.final("utf8");

console.log(mystr);
