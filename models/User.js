const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING(150)
      },
      email: {
        type: DataTypes.STRING(150),
        unique: true
      },
      password: DataTypes.STRING(5000),
      rhythm: DataTypes.STRING(5000),
      phone: DataTypes.STRING(10),
      gender: DataTypes.CHAR(10),
      age: DataTypes.STRING(10),
      status: DataTypes.STRING(2000),
      objective: DataTypes.STRING(2000)
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  )

  User.prototype.comparePassword = async function (password) {
    console.log('IM IN')
    let result = bcrypt.compareAsync(password, this.password)
    console.log('IM OUT')
    return result
  }
  return User
}
