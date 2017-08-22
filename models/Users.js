var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
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
 
});

User.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
User.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the users is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', User);