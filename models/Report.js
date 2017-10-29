module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {})
  Report.associate = function (models) {
    Report.belongsTo(models.User, {as: 'User'})
    Report.belongsTo(models.User, {as: 'Reported'})
  }
  return Report
}
