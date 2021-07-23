const { Passenger } = require('../models');

const passengerData = [
  {
    depart_time: '10',
    arival_time: '8PM',
    depart_location: "Test",
    arival_location: "Test",
    train_id: 1,
    station_id: 1,
  },
];

const seedPassengers = () => Passenger.bulkCreate(passengerData);

module.exports = seedPassengers;
