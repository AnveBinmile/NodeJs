const getAllStudentsFromDB = async () => {
  const students = await Student.findAll();
  return students;
};

const userExists = async (data) => {
  const user = await Student.findOne({
    where: {
      ID: data.ID,
      FirstName: data.FirstName,
      MARKS: data.MARKS,
    },
  });

  if (user) return true;
  return false;
};

const insertStudentIntoDB = async (req, res) => {
  const student = await Student.create({
    ID: req.body.ID,
    FirstName: req.body.FirstName,
    MARKS: req.body.MARKS,
  });
  student.save();
  return student;
};

const updateStudentIntoDB = async (data) => {
  console.log(data);
  const student = await Student.findOne({
    where: {
      ID: data.ID,
    },
  });

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
  const student = await Student.findOne({
    where: {
      ID: data.ID,
    },
  });
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
  userExists,
};
