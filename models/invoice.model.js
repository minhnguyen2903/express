module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize"); // Import the built-in data types

  const Invoices = sequelize.define("invoices", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING,
    date: DataTypes.DATE,
  });

  return Invoices;
};
