const {
  getAllStudentsController,
  insertStudentController,
  updateStudentController,
  deleteStudentController,
  getPageWiseController,
  
} = require("../controller/student.Controller");

app.get("/students", getAllStudentsController);

app.post("/add", insertStudentController);

app.put("/update", updateStudentController);

app.post("/delete", deleteStudentController);
