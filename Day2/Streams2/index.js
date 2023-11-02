const fs = require("fs");
const writeStream = fs.createWriteStream("write.txt", { flags: "a" });
const readStream = fs.createReadStream("read.txt");

const express = require("express");
const app = express();
const port = 8000;

const data = "Anvesha Karn";

console.log("Hello");

readStream.on("data", function (chunk) {
  console.log(chunk);
  writeStream.write(chunk);
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
