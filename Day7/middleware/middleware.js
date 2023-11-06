const { SECRET_KEY } = require("../core/constants");
const responseHandler = require('../core/responseHandlers');
const {RESPONSE_CODES,RESPONSE_MESSAGES}= require('../core/constants');
const jwt = require('jsonwebtoken');

const authorizeUser =async(req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      const decoded = await jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      return next();
    } catch (err) {
      return responseHandler({
        error: true,
        message: err,
        statusCode: RESPONSE_CODES.FAILURE_FORBIDDEN_ACCESS,
        res,
      });
    }
  }
  next();
};

module.exports = {authorizeUser};
