const { Op } = require("@sequelize/core");

const userSignUpDB = async (data) => {
  return await Student.create(data);
};

const getUserByEMailInDB = (email) => {
  return Student.findOne({
    where: {
      email: {
        [Op.like]: email,
      },
    },
  });
};

const getAllStudentsFromDB = async (sort, order, keyword = "", filter) => {
  return Student.findAll({
    where: {
      ...filter,
      [Op.or]: [
        {
          firstName: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          id: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          gender: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          phoneNumber: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          age: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ],
    },
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
  userSignUpDB,
  getUserByEMailInDB,
};
