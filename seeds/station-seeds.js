const { Station } = require('../models');

const stationData = [
  {
    name: 'Nicollete Mall',
  },
  {
    name: '46th St',
  },
  {
    name: 'Target Field Station',
  },
  {
    name: 'East Bank',
  },
  {
    name: '50th St - Minnehaha',
  },
  {
    name: 'Cedar-Riverside',
  },
  {
    name: 'West Bank',
  },
  {
    name: 'Lake st - Midtown',
  },
];

const seedStations = () => Station.bulkCreate(stationData);

module.exports = seedStations;
