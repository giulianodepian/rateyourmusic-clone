const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Label = sequelize.define("Label", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    short_name: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    postal_code: {
      type: Sequelize.STRING
    },
    street_address: {
      type: Sequelize.STRING
    },
    date_formed: {
      type: Sequelize.DATE
    },
    date_closed: {
      type: Sequelize.DATE
    },
    phone: {
      type: Sequelize.STRING
    },
    website: {
      type: Sequelize.STRING
    },
    biography: {
      type: Sequelize.TEXT
    },
    aliases: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
  });

  Label.associate = function(models) {
    Label.hasMany(models.Release, {
      foreignKey: 'labelID',
      as: 'releases'
    })
  }

  return Label;
};