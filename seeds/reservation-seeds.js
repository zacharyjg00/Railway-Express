const { Reservation } = require('../models');

const reservationData = [
  {
    depart_time: '10',
    depart_location: "Nicollete Mall",
    passenger_id: 1,
    train_id: 1,
    station_id: 1,
  },

  {
    depart_time: '10',
    depart_location: "50th St - Minnehaha",
    passenger_id: 2,
    train_id: 2,
    station_id: 5,
  },

  {
    depart_time: '10',
    depart_location: "West Bank",
    passenger_id: 3,
    train_id: 3,
    station_id: 7,
  },

  {
    depart_time: '15',
    depart_location: "46th St",
    passenger_id: 1,
    train_id: 1,
    station_id: 2,
  },

  {
    depart_time: '15',
    depart_location: "Cedar-Riverside",
    passenger_id: 2,
    train_id: 2,
    station_id: 6,
  },
];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;
