const {
  getStudentDataService,
  insertStudentDataService,
  updateStudentDataService,
  deleteStudentDataService,
} = require("../service/service.student");

const getAllStudentsController = async (req, res) => {
  try {
    getStudentDataService(res);
  } catch (error) {}
};

const insertStudentController = async (req, res) => {
  try {
    console.log("insert");
    insertStudentDataService(req,res);
  } catch (err) {}
};

const updateStudentController = async (req, res) => {
  try {
    updateStudentDataService(req,res);
  } catch (err) {}
};

const deleteStudentController = async (req, res) => {
  try {
    deleteStudentDataService(req,res);
  } catch (err) {}
};

module.exports = {
  getAllStudentsController,
  insertStudentController,
  updateStudentController,
  deleteStudentController,
};
