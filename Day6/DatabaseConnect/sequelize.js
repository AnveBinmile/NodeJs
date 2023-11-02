const sequelize = require("sequelize");

const db = new sequelize({
  database: "XYZ",
  username: "anvesha",
  password: "Bmtuser@123",
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

