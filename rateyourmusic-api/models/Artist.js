const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Artist = sequelize.define("Artist", {
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
    members: {
      type: Sequelize.TEXT
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
    birth: {
      type:  Sequelize.DATE
    },
    death: {
      type: Sequelize.DATE
    },
    biography: { 
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: true,
  });

  Artist.associate = function(models) {
    Artist.hasMany(models.Release, {
      foreignKey: 'artistID',
      as: 'releases'
    });

    Artist.belongsToMany(models.Artist, {
      through: 'RelatedArtists',
      foreignKey: 'artistID',
      as: 'artists'
    });

    Artist.belongsToMany(models.Artist, {
      through: 'RelatedArtists',
      foreignKey: 'relatedartistID',
      as: 'relatedartists'
    });
    
    Artist.belongsToMany(models.Artist, {
      through: 'BandMember',
      foreignKey: 'artistID',
      as: 'bandsmember'
    });

    Artist.belongsToMany(models.Artist, {
      through: 'BandMember',
      foreignKey: 'bandID',
      as: 'bands'
    });

    Artist.belongsToMany(models.User, {
      foreignKey: 'artistID',
      through: 'UserArtist',
      as: 'followers'
    })
  }

  return Artist;
};
