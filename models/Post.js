const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostModel extends Model {}

PostModel.init(
  {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'userId'
      }
    }
  },
  {
    sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
  }
);

module.exports = PostModel;