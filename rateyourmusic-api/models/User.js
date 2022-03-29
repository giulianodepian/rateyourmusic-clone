const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    }
  },
  {
    timestamps: true,
    instanceMethods: {
      validPassword(password) {
        bcrypt.compare(password, this.password, function(err, result) {
          return result
        })
      }
    },
    hooks: {
      beforeCreate: function(user) {
        bcrypt.hash(user.password, 10, function(err, hash) {
          user.password = hash
        });
      },
      beforeUpdate: function(user) {
        bcrypt.hash(user.password, 10, function(err, hash) {
          user.password = hash
        });
      }
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Artist, {
      foreignKey: 'userID',
      through: 'UserArtist',
      as: 'artists'
    });
    
    User.hasMany(models.Rate, {
      foreignKey: 'userID',
      as: 'rates'
    });

    User.belongsToMany(models.Release, {
      foreignKey: 'userID',
      through: 'UserRelease',
      as: 'releases'
    })
  }

  return User;
};