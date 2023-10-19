const { DataTypes } = require("sequelize");

const Student = sequelize.define(
  "Student",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    MARKS: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "Students",
  }
);

console.log('meki kara')

global.Student = Student;
