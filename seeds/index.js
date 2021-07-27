const seedPassengers = require('./passenger-seeds');
const seedTrains = require('./train-seeds');
const seedReservation = require('./reservation-seeds');
const seedStations = require('./station-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPassengers();
  console.log('\n----- PASSENGERS SEEDED -----\n');

  await seedTrains();
  console.log('\n----- TRAINS SEEDED -----\n');

  await seedStations();
  console.log('\n----- STATIONS SEEDED -----\n');

  await seedReservation();
  console.log('\n-----  RESERVATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
