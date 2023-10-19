const {Sequelize} = require("sequelize");
const { database, user, password, host, dialect } = require("../config/config");

const sequelize = new Sequelize(database, user, password, {
    host:host,
    dialect:dialect
});


// console.log("database setUp ", sequelize );
global.sequelize = sequelize;
