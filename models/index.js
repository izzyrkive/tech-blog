const UserModel = require('./User');
const PostModel = require('./Post');
const CommentModel = require('./Comment');

// Creates associations between models
UserModel.hasMany(PostModel, {
  foreignKey: 'user_id'
});

PostModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
});

CommentModel.belongsTo(UserModel, {
  foreignKey: 'user_id'
});

CommentModel.belongsTo(PostModel, {
  foreignKey: 'post_id'
});

UserModel.hasMany(CommentModel, {
  foreignKey: 'user_id'
});

PostModel.hasMany(CommentModel, {
  foreignKey: 'post_id'
});

module.exports = {
  User: UserModel,
  Post: PostModel,
  Comment: CommentModel
};