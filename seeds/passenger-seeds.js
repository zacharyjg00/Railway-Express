const { Passenger } = require('../models');

const passengerData = [
  {
    username: 'BobTheBest',
    email: "bob@gmail.com",
    password: "password123",
  },

  {
    username: 'bb8rox',
    email: "swfl@hotmail.com",
    password: "password123",
  },

  {
    username: 'oldman54',
    email: "oldest@yahoo.com",
    password: "password123",
  },
];

const seedPassengers = () => Passenger.bulkCreate(passengerData, {validate: true,individualHooks: true} );


module.exports = seedPassengers;
