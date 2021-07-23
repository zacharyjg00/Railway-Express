const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create schedule model
class Schedule extends Model { }

//create fields/columns for schedule model
Schedule.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    depart_time: {
      type: DataTypes.DATE,
    },

    arival_time: {
      type: DataTypes.DATE,
    },

    depart_location: {
      type: DataTypes.STRING,
    },

    arival_location: {
      type: DataTypes.STRING,
    },

    train_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'train',
        key: 'id',
      },
    },

    station_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'station',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule',
  }
);

module.exports = Schedule;
