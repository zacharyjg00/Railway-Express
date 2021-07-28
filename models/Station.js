const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Station extends Model { }

Station.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    depart_time: {
      type: DataTypes.INTEGER
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'station',
  }
);

module.exports = Station;
