const {
  getStudentDataService,
  insertStudentDataService,
  updateStudentDataService,
  deleteStudentDataService,
  userSignUpService,
  userSignIn
} = require("../service/student.service");
const responseHandler = require("../core/responseHandlers");
const {
  insertSchema,
  deleteSchema,
  updateSchema,
  fetchSchema,
  filterSchema,
} = require("../schema/studentSchema");
const { RESPONSE_CODES } = require("../core/constants");

const userSignUpController = async(req,res)=>{
  await userSignUpService(req,res);
}

const userSignInController = async(req,res)=>{
   await userSignIn(req.body);
}

const getAllStudentsController = async (req, res) => {
  const {
    sort = "id",
    order = "ASC",
    page = 1,
    limit = 10,
    keyword,
    ...filter
  } = req.query;
  const error =
    fetchSchema.validate({ sort, order }).error ??
    filterSchema.validate(filter).error;
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_FORBIDDEN_ACCESS,
      error: true,
      res,
      message: error.message,
    });
  }

  await getStudentDataService(req, res);
};

const insertStudentController = async (req, res) => {
  const { error } = insertSchema.validate(req.body);
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_FORBIDDEN_ACCESS,
      error: false,
      res,
      message: error.message,
    });
  }
  await insertStudentDataService(req, res);
};

const updateStudentController = async (req, res) => {
  const { error } = updateSchema.validate(req.body);
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_FORBIDDEN_ACCESS,
      error: true,
      res,
      message: error.message,
    });
  }
  await updateStudentDataService(req, res);
};

const deleteStudentController = async (req, res) => {
  const { error } = deleteSchema.validate(req.body);
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_BAD_REQUEST,
      error: true,
      res,
      message: error.message,
    });
  }
  await deleteStudentDataService(req, res);
};

module.exports = {
  getAllStudentsController,
  insertStudentController,
  updateStudentController,
  deleteStudentController,
  userSignUpController,
  userSignInController
};
