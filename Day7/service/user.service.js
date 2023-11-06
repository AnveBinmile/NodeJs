const { RESPONSE_CODES } = require("../core/constants");
const responseHandler = require("../core/responseHandlers");
const { listUsersInDb, createRoleInDb } = require("../dbLayer/user.dbLayer");
const to = require("await-to-js").default;

const listUserService = async (req, res) => {
  const [error, data] = await to(listUsersInDb());
  if (data) {
    responseHandler({
      error: RESPONSE_CODES.SUCCESS_OK,
      res,
      data: data,
      message: data,
    });
  } else {
    responseHandler({
      error: RESPONSE_CODES.SUCCESS_OK,
      res,
      data: error,
      message: data,
    });
  }
};

const createRoleService = async (req, res) => {
  const [error, data] = await to(createRoleInDb(req.body));
  if (data) {
    responseHandler({
      error: RESPONSE_CODES.SUCCESS_CREATED,
      res,
      data: data,
      message: data,
    });
  }
};

module.exports = { listUserService, createRoleService };
