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

  const [error,data] = await to(Student.findAll());



  newUsers.count = data.length;

  if(page<1 || startIndex>=data.length){
    return error;
  }

  newUsers.newUsers = data.slice(startIndex, endIndex);

  return newUsers;
};

const getAllStudentsFromDB = async () => {
  const students = await Student.findAll();
  return students;
};

const insertStudentIntoDB = async (data) => {
  const studentData = {
    ID: data.ID,
    FirstName: data.FirstName,
    MARKS: data.MARKS,
  };

  const [error, student] = await to(Student.create(studentData));
  if (error) {
    return null;
  }

  student.save();
  return student;
};

const updateStudentIntoDB = async (data) => {
  const [error, student] = await to(
    Student.findOne({
      where: {
        ID: data.ID,
      },
    })
  );

  if (student) {
    if (data.FirstName) {
      student.FirstName = data.FirstName;
    }

    if (data.MARKS) {
      student.MARKS = data.MARKS;
    }
    student.save();
    return student;
  }

  return null;
};

const deleteStudentIntoDB = async (data) => {
  const [error, student] = await to(
    Student.findOne({
      where: {
        ID: data.ID,
      },
    })
  );

  if (student) {
    await student.destroy();
    return true;
  }

  return false;
};

module.exports = {
  getAllStudentsFromDB,
  insertStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentIntoDB,
  paginationInDB,
};
