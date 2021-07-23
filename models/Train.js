// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize train model (table) by extending off Sequelize's Model class
class Train extends Model {}

// set up fields and rules for Product model
Train.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'schedule',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'train',
  }
);

module.exports = Train;
