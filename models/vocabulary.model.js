module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize"); // Import the built-in data types

  const Vocabulary = sequelize.define("vocabulary", {
    english: DataTypes.STRING,
    vietnamese: DataTypes.STRING,
    desImg: DataTypes.STRING,
    example: DataTypes.STRING,   
  });

  return Vocabulary;
};
