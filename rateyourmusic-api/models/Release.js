const { Sequelize, DataTypes } = require("sequelize");

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
    },
    attribute_content:{
      type: Sequelize.STRING
    },
    attribute_release:{
      type: Sequelize.STRING
    },
    attribute_package:{
      type: Sequelize.STRING
    },
    attribute_specs:{
      type: Sequelize.STRING
    },
    attribute_quality:{
      type: Sequelize.STRING
    },
    attribute_speed:{
      type: Sequelize.STRING
    },
    attribute_manufacturing:{
      type: Sequelize.STRING
    },
    attribute_digital_distribution:{
      type: Sequelize.STRING
    },
    recordingdate_from:{
      type: Sequelize.DATE
    },
    recordingdate_to:{
      type: Sequelize.DATE
    },
    languages: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: true,
  });

  Release.associate = function(models) {
    Release.belongsTo(models.Artist, {
      foreignKey: 'artistID',
      as: 'artistreleases'
    });

    Release.belongsToMany(models.Genre, {
      through: 'GenreRelease',
      foreignKey: 'releaseID',
      as: 'genres'
    });

    Release.belongsTo(models.Label, {
      foreignKey: 'labelID',
      as: 'labelreleases'
    });

    Release.hasMany(models.Track, {
      foreignKey: 'releaseID',
      as: 'tracks'
    });

    Release.hasMany(models.Rate, {
      foreignKey: 'releaseID',
      as: 'rates'
    });

    Release.belongsToMany(models.User, {
      foreignKey: 'releaseID',
      through: 'UserRelease',
      as: 'users'
    })
  }

  return Release;
};