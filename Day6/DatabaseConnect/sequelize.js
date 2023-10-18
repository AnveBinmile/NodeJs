const sequelize = require("sequelize");

const db = new sequelize({
  database: "XYZ",
  username: "anvesha",
  password: "Bmtuser@123",
  dialect: "mysql",
});

const User = db.define("user2", {
  username: {
    type: sequelize.STRING,
    primaryKey: true,
  },
});

db.sync()
  .then(() => {
    console.log("Database and tables created!");
    return User.create({
       username: "anvesha",
    });
  })
  .then((anvesha)=>{
    console.log('Anvesha created!');
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = User;
