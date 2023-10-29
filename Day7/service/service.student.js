const responseHandler = require("../core/responseHandlers");
const { RESPONSE_CODES, RESPONSE_MESSAGES } = require("../core/constants");
const to = require("await-to-js").default;
const {Op}= require('@sequelize/core');

const {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
} = require("../dbLayer/dbLayer");

const getStudentDataService = async (req, res) => {
  const {
    sort = "id",
    order = "ASC",
    page = 1,
    limit = 10,
    ...filter
  } = req.query;

  const mainFilter = {};
  try {
    const [error, data] = await to(getAllStudentsFromDB(sort, order, filter));
    if (data) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = {};

      for (const key in filter) {
        mainFilter[key]={
          [Op.like]:  `%${filter[key]}%`
        };
      }

      result.next = {
        page: Number(page) + 1,
        limit: limit,
      };

      result.previous = {
        page: Number(page) - 1,
        limit: limit,
      };

      if (page < 1 || startIndex >= data.length) {
        return error;
      }

      result.count = data.length;

      result.data = data.slice(startIndex, endIndex);
      responseHandler({
        statusCode: RESPONSE_CODES.SUCCESS_OK,
        data: result,
        res,
        message: RESPONSE_MESSAGES.FETCHED,
      });
    } else {
      return responseHandler({
        statusCode: RESPONSE_CODES.FAILURE_NOT_FOUND,
        res: res,
        message: error.message,
      });
    }
  } catch (err) {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_NOT_FOUND,
      res: res,
      message: err.message,
    });
  }

  const [error, data] = await to(getAllStudentsFromDB(sort, order, mainFilter));
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
  console.log(result);
  if (!error) {
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
};
