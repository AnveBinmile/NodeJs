const to = require("await-to-js").default;
const { Op } = require("@sequelize/core");

const getAllStudentsFromDB = async (sort, order, filter) => {
  return Student.findAll({
    where: filter,
    order: [[sort, order]],
  });
};

const insertStudentIntoDB = async (data) => {
  return Student.create(data);
};

const updateStudentIntoDB = async (data) => {
  return Student.update(data, {
    where: {
      id: data.id,
    },
  });
};

const deleteStudentIntoDB = (data) => {
  return Student.destroy({
    where: {
      id: data.id,
    },
  });
};

module.exports = {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
};
