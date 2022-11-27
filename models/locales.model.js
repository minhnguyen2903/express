module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize"); // Import the built-in data types

  const Timezones = sequelize.define("locales", {
    key: DataTypes.STRING,
    en: DataTypes.STRING,
    vi: DataTypes.STRING,
  });

  return Timezones;
};
