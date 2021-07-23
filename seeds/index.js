const seedPassengers = require('./passenger-seeds');
const seedTrains = require('./train-seeds');
const seedSchedule = require('./schedule-seeds');
const seedStations = require('./station-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedPassengers();
  console.log('\n----- PASSENGERS SEEDED -----\n');

  await seedTrains();
  console.log('\n----- TRAINS SEEDED -----\n');

  await seedSchedule();
  console.log('\n-----  SCHEDULES SEEDED -----\n');

  await seedStations();
  console.log('\n----- STATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
