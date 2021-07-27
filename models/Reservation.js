// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize train model (table) by extending off Sequelize's Model class
class Reservation extends Model { }

// set up fields and rules for Reservation model
Reservation.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        depart_time: {
            type: DataTypes.STRING,
        },
        passenger_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'passenger',
                key: 'id',
            },
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
        modelName: 'reservation',
    }
);

module.exports = Reservation;