const mysql = require("mysql2");
const express = require("express");
const app = express();
const sequalize = require("sequalize");

app.use (bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "anvesha",
  password: "Bmtuser@123",
  database: "XYZ",
});


app.get("/students", (req, res) => {
  const sql = "SELECT * FROM stu;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    res.json({ message: "STUDENT DATA", data });
  });
});

app.listen(4000, () => {
  console.log("server running ");
});

