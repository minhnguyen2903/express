module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize"); // Import the built-in data types

  const TimeZones = sequelize.define("users", {
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    birth: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    bankBalance: DataTypes.INTEGER,
    timezone: DataTypes.STRING,
  });

  return TimeZones;
};
