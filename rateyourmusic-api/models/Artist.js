const { Sequelize } = require("sequelize");

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
    Artist.hasMany(models.release, {
      foreignKey: 'artistId',
      as: 'releases'
    });

    Artist.belongsToMany(models.artist, {
      through: 'RelatedArtists',
      foreignKey: 'artistId',
      as: 'artists'
    });
    
    Artist.belongsToMany(models.artist, {
      onDelete: 'CASCADE',
      through: 'BandMember',
      foreignKey: 'artistId',
      as: 'bands'
    });

    Artist.belongsToMany(models.user, {
      foreignKey: 'artistId',
      through: 'UserArtist',
      as: 'followers'
    })
  }

  return Artist;
};
