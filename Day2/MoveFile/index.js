const multer = require("multer");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

const extractFileData = (data, folder, res) => {
  const fileNameData = data.originalname.split(".");
  const fileName = fileNameData[0];
  const fileExtension = fileNameData[1];
  const date = new Date();
  const newFileName =
    fileName + date.getTime().toString() + "." + fileExtension;
  const size = data.size / 1000000;
  data.originalname = newFileName;
  fs.writeFileSync(`./uploads/${folder}/${newFileName}`, data.buffer);

  if (folder === "images" && size >= 5) {
    res.send(`${size}MB EXCEEDS EXCEEDS FILE SIZE LIMIT`);
  } else if (folder === "pdfs" && size >= 15) {
    res.send(`${size}MB EXCEEDS EXCEEDS FILE SIZE LIMIT`);
  }
};

app.post("/", multer().single("file"), (req, res) => {
  const fileExtension = req.file.originalname.split(".")[1];

  if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg"
  ) {
    extractFileData(req.file, "images", res);
  } else {
    extractFileData(req.file, "pdfs", res);
  }

  res.send("UPLOAD SUCCESS");
});

app.listen(port, () => {
  console.log("listening on 7000");
});
