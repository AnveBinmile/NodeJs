const responseHandler = require("../core/responseHandlers");
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require("../core/constants");
const to = require("await-to-js").default;

const {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
  paginationInDB,
} = require("../dbLayer/dbLayer");

const getStudentDataService = async (req, res) => {
  try {
    const { sort = "id", order = "ASC", ...filter } = req.query || {};
    const [error, data] = await to(
      getAllStudentsFromDB(sort, order,filter)
    );
    if (data) {
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_OK,
        data: data,
        res: res,
        message: RESPONSE_MESSAGES.FETCHED,
      });
    } else {
      responseHandler({
        statusCode: RESPONSE_CODES.FAILURE_NOT_FOUND,
        data: data,
        res: res,
        message: error.message,
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

const getPageWiseData = async (req, res) => {
  const result = await paginationInDB(req);
  if (result) {
    responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_OK,
      data: result,
      res,
      message: RESPONSE_MESSAGES.FETCHED,
    });
  } else {
    responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
      error: false,
      res,
      message: RESPONSE_MESSAGES.FETCHED_NOT_FOUND,
    });
  }
};

const insertStudentDataService = async (req, res) => {
  const [error, student] = await to(insertStudentIntoDB(req.body));
  if (!error) {
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
      message: error,
    });
  }
};

const updateStudentDataService = async (req, res) => {
  const [error, result] = await to(updateStudentIntoDB(req.body));
  if (!error) {
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
      message: error.message,
    });
  }
};

const deleteStudentDataService = async (req, res) => {
  const [error, result] = await to(deleteStudentIntoDB(req.body));
  if (error) {
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
      message: error.message,
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
