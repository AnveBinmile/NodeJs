const to = require("await-to-js").default;

const paginationInDB = async (req) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const newUsers = {};
  newUsers.next = {
    page: page + 1,
    limit: limit,
  };

  newUsers.previous = {
    page: page - 1,
    limit: limit,
  };

  const [error, data] = await to(Student.findAll());

  newUsers.count = data.length;

  if (page < 1 || startIndex >= data.length) {
    return error;
  }

  newUsers.newUsers = data.slice(startIndex, endIndex);
  return newUsers;
};

const getAllStudentsFromDB = async (sort, order,filter) => {
  const [error, students] = await to(
    Student.findAll({
      where: filter,
      order: [[sort, order]],
    })
  );

  if (error) return null;

  return students;
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
    where:{
      id:data.id,
    }
  })
};

module.exports = {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
  paginationInDB,
};
