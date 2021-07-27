// import models
const Passenger = require('./Passenger');
const Station = require('./Station');
const Train = require('./Train');
const Reservation = require("./Reservation")

Passenger.hasOne(Reservation, {});

Reservation.belongsTo(Passenger, {});

Train.hasMany(Reservation, {});

Station.hasMany(Reservation, {});

module.exports = {
  Passenger,
  Station,
  Train,
  Reservation
};
