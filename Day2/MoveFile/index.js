const multer = require("multer");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", multer().single("file"), (req, res) => {
  const fileNameData = req.file.originalname.split(".");
  const fileName = fileNameData[0];
  const fileExtension = fileNameData[1];
  const date = new Date();

  const newFileName =
    fileName + date.getTime().toString() + "." + fileExtension;
  const size = req.file.size / 1000;
  req.file.originalname = newFileName;

  if (size >= 30) {
    res.send(`${size}MB EXCEEDS EXCEEDS FILE SIZE LIMIT`);
  }

  if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg"
  ) {
    fs.writeFileSync(`./uploads/images/${newFileName}`, req.file.buffer);
  } else {
    fs.writeFileSync(`./uploads/pdfs/${newFileName}`, req.file.buffer);
  }

  res.send("UPLOAD SUCCESS");
});

app.listen(port, () => {
  console.log("listening on 7000");
});
