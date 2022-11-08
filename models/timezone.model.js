module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize"); // Import the built-in data types

  const Timezones = sequelize.define("timezones", {
    region: DataTypes.STRING,
    timezone: DataTypes.STRING,
  });

  return Timezones;
};
