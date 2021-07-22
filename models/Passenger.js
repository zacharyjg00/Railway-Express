const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create Passenger model
class Passenger extends Model {}

//create fields/columns for Passenger model
Passenger.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reservation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'reservation',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'passenger',
  }
);

module.exports = Passenger;
