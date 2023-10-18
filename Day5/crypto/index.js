const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const storedCred = {
  username: "anvesha",
  password: "anu@123",
};

const encryptData = () => {
  const algorithm = "aes-256-cbc";

  const initVector = crypto.randomBytes(16);
  const message = storedCred.password;
  const Securitykey = crypto.randomBytes(32);

  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

  let encryptedData = cipher.update(message, "utf-8", "hex");

  encryptedData += cipher.final("hex");

  console.log("Encrypted message: " + encryptedData);

  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

  decryptedData += decipher.final("utf8");

  console.log("Decrypted message", decryptedData);

  app.use(bodyParser.urlencoded({ extended: false }));
};

app.post("/", (req, res) => {
  console.log(req.query);
  const password = req.query.password;
  console.log(typeof password, password);
  const encCipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  const decCipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

  let encPass = encCipher.update(password, "utf-8", "hex");
  encPass += encCipher.final("hex");

  let decPass = decCipher.update(encPass, "hex", "utf-8");
  decPass += decCipher.final("utf8");

  console.log("pass ", encPass, decPass, decryptedData);

  if (decryptedData == decPass) {
    console.log("MATCHED");
    res.send("SUCCESS");
  } else res.send();
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
