module.exports = (sequelize, DataTypes) => {
  const Following = sequelize.define('Following', {})
  Following.associate = function (models) {
    Following.belongsTo(models.User, {as: 'User'})
    Following.belongsTo(models.User, {as: 'Following'})
  }
  return Following
}
