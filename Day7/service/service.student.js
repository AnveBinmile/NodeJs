const responseHandler = require("../core/responseHandlers");
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require("../core/constants");


const {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
  paginationInDB,
} = require("../dbLayer/dbLayer");

const getStudentDataService = async (res) => {
  try {
    getAllStudentsFromDB().then((data) => {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
        data: data,
        res: res,
        message: RESPONSE_MESSAGES.FETCHED_NOT_FOUND,
      });
    });
  } catch (err) {
    responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

const getPageWiseData = async (req, res) => {
  // try {
  const result = await paginationInDB(req);
  if (result) {
    responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_OK,
      error: false,
      data: result,
      res,
      message: RESPONSE_MESSAGES.FETCHED,
    });
  }
  else{
    responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
      error: false,
      res,
      message: RESPONSE_MESSAGES.FETCHED_NOT_FOUND,
    });
  }
};

const insertStudentDataService = async (req, res) => {
  try {
    const student = await insertStudentIntoDB(req.body);
    if (student !== null) {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_CREATED,
        data: student,
        res: res,
        message: RESPONSE_MESSAGES.INSERT_SUCCESS,
      });
    } else {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
        res,
        message: RESPONSE_MESSAGES.INSERT_AL_EXIST,
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

const updateStudentDataService = async (req, res) => {
  try {
    const result = await updateStudentIntoDB(req.body);
    console.log(result);
    if (result !== null) {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_OK,
        data: result,
        res,
        message: RESPONSE_MESSAGES.UPDATE_SUCCESS,
      });
    } else {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
        res,
        message: RESPONSE_MESSAGES.FETCHED_NOT_FOUND,
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

const deleteStudentDataService = async (req, res) => {
  try {
    const result = await deleteStudentIntoDB(req.body);
    if (result) {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_OK,
        data: req.body,
        res,
        message: RESPONSE_MESSAGES.DELETE_SUCCESS,
      });
    } else {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_OK,
        res,
        message: RESPONSE_MESSAGES.FETCHED_NOT_FOUND,
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_INT_SERVER_ERROR,
      error: true,
      res,
      message: err.message,
    });
  }
};

module.exports = {
  getStudentDataService,
  insertStudentDataService,
  updateStudentDataService,
  deleteStudentDataService,
  getPageWiseData,
};
