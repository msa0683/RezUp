var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          len: [1]
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validation: {
          len: [1]
        } 
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validation: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validation: {
          len: [1]
        }
      },
      oauth_id: {
        type: DataTypes.STRING,
        allowNull: true,
        validation: {
          len: [1]
        }
      }
    }
  );

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  
  User.associate = function(models) {
    User.hasMany(models.itineraries, {
      onDelete: 'CASCADE'
    });
  };
  return User;
};
