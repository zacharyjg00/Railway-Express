const { Passenger } = require('../models');

const passengerData = [
  {
    first_name: 'first',
    last_name: 'last',
    email: "Test@test.com",
    password: "TestTest",
    phone_number: "6510000000",
    schedule_id: 1,
  },

  {
    first_name: 'first',
    last_name: 'last',
    email: "Test@test1.com",
    password: "TestTest",
    phone_number: "6510000000",
    schedule_id: 1,
  },

  {
    first_name: 'first',
    last_name: 'last',
    email: "Test@test2.com",
    password: "TestTest",
    phone_number: "6510000000",
    schedule_id: 1,
  }
];

const seedPassengers = () => Passenger.bulkCreate(passengerData, {validate: true,individualHooks: true} );


module.exports = seedPassengers;
