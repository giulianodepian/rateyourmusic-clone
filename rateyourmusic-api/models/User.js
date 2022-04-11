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
    hooks: {
      beforeCreate: async (user) => {
         if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate:async (user) => {
       if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
       }
     },
    }
  });

  User.prototype.validPassword = async function (password) {
    const result = await bcrypt.compare(password, this.password)
    return result
  };

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
