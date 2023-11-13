const sequelize = require('../database/database')

const listUsersInDb = () => {
  return sequelize.query(
    // 'SELECT * FROM Users LEFT JOIN Students ON Users.id=Students.id',
    {
      type: sequelize.QueryTypes.select,
    }
  );
  // return User.findAll({
  //   include: {
  //     model: Student,
  //     required: true,
  //   },
  // });
};

const createRoleInDb = async (data) => {
  return User.create(data);
};

module.exports = { listUsersInDb, createRoleInDb };
