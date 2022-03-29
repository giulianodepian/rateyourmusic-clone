const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UserRelease = sequelize.define("UserRelease", {
    releaseID: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    userID: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    catalog_type: {
      type: Sequelize.STRING
    }
  });

  return UserRelease;
};