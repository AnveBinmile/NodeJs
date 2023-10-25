const {
  getStudentDataService,
  insertStudentDataService,
  updateStudentDataService,
  deleteStudentDataService,
  getPageWiseData
} = require("../service/service.student");




const getPageWiseController = async (req, res) => {
  getPageWiseData(req,res);
};

const getAllStudentsController = async (req, res) => {
  await getStudentDataService(res);
};

const insertStudentController = async (req, res) => {
  await insertStudentDataService(req, res);
};

const updateStudentController = async (req, res) => {
  await updateStudentDataService(req, res);
};

const deleteStudentController = async (req, res) => {
  await deleteStudentDataService(req, res);
};

module.exports = {
  getAllStudentsController,
  insertStudentController,
  updateStudentController,
  deleteStudentController,
  getPageWiseController
};
