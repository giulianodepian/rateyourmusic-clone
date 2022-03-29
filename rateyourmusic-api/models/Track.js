const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Track = sequelize.define("Track", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    number: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
  });

  Track.associate = function(models) {
    Track.belongsTo(models.Release, {
      foreignKey: 'releaseID',
      as: 'tracks'
    })
  }

  return Track;
};