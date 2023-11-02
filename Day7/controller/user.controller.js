// const { listUsersInDb } = require("../dbLayer/user.dbLayer");
const { listUserService,createRoleService } = require("../service/user.service");

const listUsersController = async (req, res) => {
  await listUserService(req, res);
};

const createUserController = async(req, res) => {
    await createRoleService(req, res);
}

module.exports = { listUsersController, createUserController };
