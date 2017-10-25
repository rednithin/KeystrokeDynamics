module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING(150)
    },
    description: {
      type: DataTypes.STRING(5000)
    }
  })
  Post.associate = function (models) {
    Post.belongsTo(models.User)
  }
  return Post
}
