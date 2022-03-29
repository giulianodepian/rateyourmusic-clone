const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Rate = sequelize.define("Rate", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rating: {
      allowNull: false,
      type: Sequelize.REAL
    },
    comment: {
      type: Sequelize.STRING(30)
    }
  },
  {
    timestamps: true,
  });

  Rate.associate = function(models) {
    Rate.belongsTo(models.Release, {
      foreignKey: 'releaseID',
      as: 'rates'
    });

    Rate.belongsTo(models.User, {
      foreignKey: 'userID',
      as: 'userrates'
    })
  }

  return Rate;
};
