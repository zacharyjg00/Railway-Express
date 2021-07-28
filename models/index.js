// import models
const Passenger = require('./Passenger');
const Station = require('./Station');
const Reservation = require("./Reservation")

Passenger.hasOne(Reservation, {
  foreignKey: "passenger_id"
});

Reservation.belongsTo(Passenger, {
  foreignKey: "passenger_id"
});

Station.hasMany(Reservation, {
  foreignKey: "station_id"
});

module.exports = {
  Passenger,
  Station,
  Reservation
};
