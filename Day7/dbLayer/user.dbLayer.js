const listUsersInDb = () => {
  return User.findAll({
    model: User,
    required: true,
  });
};

const createRoleInDb = async (data) => {
  console.log(data);
  return User.create(data);
};

module.exports = { listUsersInDb, createRoleInDb };
