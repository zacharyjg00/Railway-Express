const { Reservation } = require('../models');

const reservationData = [
  {
    passenger_id: 1,
    station_id: 1,
  },

  {
    passenger_id: 2,
    station_id: 5,
  },

  {
    passenger_id: 3,
    station_id: 7,
  }
];

const seedReservation = () => Reservation.bulkCreate(reservationData);0

module.exports = seedReservation;
