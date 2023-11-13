const { Sequelize } = require("sequelize");
const { dbconfig } = require("../config/config");
const { database, user, password, host, dialect } = dbconfig;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    sequelize
      .sync()
      .then(() => {
        console.log("Models have been synchronized with the database.");
      })
      .catch((err) => {
        console.error("Error synchronizing models with the database:", err);
      });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// global.sequelize = sequelize;
// module.exports=sequelize

module.exports = sequelize;