const { Sequelize } = require("sequelize");

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
    }
    toplevel: {
      type:Sequelize.BOOLEAN
    }
  }
  {
    timestamps: true,
  });

  Genre.associate = function(models) {
    Genre.belongsToMany(models.release, {
      through: 'GenreRelease'
      foreignKey: 'genreId',
      as: 'releases'
    });

    Genre.belongsToMany(models.genre, {
      through: 'ParentChild'
      foreignKey: 'childId',
      as: 'subgenres',
    })
  }

  return Genre;
};
