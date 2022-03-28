const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Release = sequelize.define("Release", {
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
    release_type: {
      allowNull: false,
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    format: {
      type: Sequelize.STRING
    },
    disc_size: {
      type: Sequelize.STRING
    },
    catalog_number: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    }
    attribute_content:{
      type: Sequelize.ARRAY(Sequelize.STRING)
    }
  },
  {
    timestamps: true,
  });

  Release.associate = function(models) {
    Release.belongsTo(models.artist, {
      foreignKey: 'artistId',
      as: 'releases'
    });

    Release.belongsToMany(models.genre, {
      through: 'GenreRelease',
      foreignKey: 'releaseId',
      as: 'genres'
    });

    Release.belongTo(models.label {
      foreignKey: 'labelId',
      as: 'releases'
    })
  }

  return Release;
};