'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.blogs.belongsTo(models.users, { foreignKey: 'userID' })
    }
  }
  blogs.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};