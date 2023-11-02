const {
  getAllStudentsController,
  insertStudentController,
  updateStudentController,
  deleteStudentController,
  userSignUpController,
  // userSignInController,
} = require("../controller/student.Controller");

const {authorizeUser}= require('../middleware/middleware')

app.post("/register", userSignUpController);

app.get("/students",authorizeUser,  getAllStudentsController);

app.post("/add", insertStudentController);

app.put("/update", updateStudentController);

app.post("/delete", deleteStudentController);
