module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING(150)
    },
    description: {
      type: DataTypes.STRING(5000)
    }
  })
  return Post
}
