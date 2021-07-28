const { Station } = require('../models');

const stationData = [
  {
    name: 'Albert Lea',
    depart_time: 7
  },
  {
    name: 'Faribault',
    depart_time: 8
  },
  {
    name: 'Lakeville',
    depart_time: 9
  },
  {
    name: 'Minneapolis - St. Paul',
    depart_time: 10
  },
  {
    name: 'St. Cloud',
    depart_time: 11
  },
  {
    name: 'Brainerd',
    depart_time: 12
  },
  {
    name: 'Duluth',
    depart_time: 13
  },
  {
    name: 'Bemidji',
    depart_time: 14
  },
];

const seedStations = () => Station.bulkCreate(stationData);

module.exports = seedStations;
