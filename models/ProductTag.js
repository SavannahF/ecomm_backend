const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          // ref Product.js
          model: 'product',
          key: 'id'
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          // ref Tag.js
          model: 'tag',
          key: 'id'
        }
      }
    // end
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;