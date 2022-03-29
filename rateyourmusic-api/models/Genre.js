const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Genre = sequelize.define("Genre", {
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
    description: {
      type: Sequelize.TEXT
    },
    aka: {
      type: Sequelize.TEXT
    },
    toplevel: {
      type:Sequelize.BOOLEAN
    }
  },
  {
    timestamps: true,
  });

  Genre.associate = function(models) {
    Genre.belongsToMany(models.Release, {
      through: 'GenreRelease',
      foreignKey: 'genreID',
      as: 'releases'
    });

    Genre.belongsToMany(models.Genre, {
      through: 'ParentChild',
      foreignKey: 'genrechildID',
      as: 'genres',
    })

    Genre.belongsToMany(models.Genre, {
      through: 'ParentChild',
      foreignKey: 'genreparentID',
      as: 'parentgenres',
    })
  }

  return Genre;
};
