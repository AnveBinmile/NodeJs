const { DataTypes } = require("sequelize");

const Student = sequelize.define(
  "Student",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

global.Student = Student;
