// const { getAllStudents } = require("../controller/studentController");

const { getAllStudents } = require("../controller/studentController");

app.get("/users", getAllStudents);
