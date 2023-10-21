const responseHandler = require("../core/responseHandlers");

const {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
  userExists,
} = require("../dbLayer/dbLayer");

const getStudentDataService = async (res) => {
  try {
    if (userExists) {
      responseHandler({
        statusCode: 204,
        data: data,
        res: res,
        message: "successfully data fetched",
      });
    } else {
      getAllStudentsFromDB().then((data) => {
        responseHandler({
          statusCode: 200,
          data: data,
          res: res,
          message: "successfully data fetched",
        });
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: 404,
      error: true,
      res,
      message: err.message,
    });
  }
};

const insertStudentDataService = async (req, res) => {
  try {
    const exist = await userExists(req.body);
    if (!exist) {
      insertStudentIntoDB(req, res).then((data) => {
        responseHandler({
          statusCode: 201,
          data: data,
          res: res,
          message: "insert student data successfully",
        });
      });
    } else {
      responseHandler({
        statusCode: 201,
        res,
        message: "already exists",
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: 500,
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
        statusCode: 200,
        data: result,
        res,
        message: "updated student data",
      });
    } else {
      responseHandler({
        statusCode: 200,
        res,
        message:"student doesnt exist",
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: 500,
      error: true,
      res,
      message: err.message,
    });
  }
};

const deleteStudentDataService = async (req, res) => {
  try {
    const result = await deleteStudentIntoDB(req.body);
    if(result){
      responseHandler({
        statusCode: 200,
        data: req.body,
        res,
        message: "delete student data",
      });
    }
    else{
      responseHandler({
        statusCode: 200,
        res,
        message: "student not found",
      });
    }
  } catch (err) {
    responseHandler({
      statusCode: 500,
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
};
