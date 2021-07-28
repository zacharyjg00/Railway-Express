const { Passenger } = require('../models');

const passengerData = [
  {
    first_name: "Bob",
    last_name: "Bob",
    email: "bob@gmail.com",
    password: "password123",
  },

  {
    first_name: "Luke",
    last_name: "Skywalker",
    email: "swfl@hotmail.com",
    password: "password123",
  },

  {
    first_name: "Ebenezer",
    last_name: "Scrooge",
    email: "oldest@yahoo.com",
    password: "password123",
  },
];

const seedPassengers = () => Passenger.bulkCreate(passengerData, {validate: true,individualHooks: true} );


module.exports = seedPassengers;
