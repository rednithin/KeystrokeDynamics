const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (admin, options) {
  const SALT_FACTOR = 8
  if (!admin.changed('password')) {
    return
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(admin.password, salt, null))
    .then(hash => {
      admin.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      name: {
        type: DataTypes.STRING(150)
      },
      email: {
        type: DataTypes.STRING(150),
        unique: true
      },
      password: DataTypes.STRING(5000)
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  )

  Admin.prototype.comparePassword = async function (password) {
    let result = await bcrypt.compareAsync(password, this.password)
    return result
  }
  return Admin
}
