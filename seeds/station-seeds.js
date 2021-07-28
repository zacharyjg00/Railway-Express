const { Station } = require('../models');

const stationData = [
  {
    name: 'Albert Lea',
    depart_time: "7 AM"
  },
  {
    name: 'Faribault',
    depart_time: "8 AM"
  },
  {
    name: 'Lakeville',
    depart_time: "9 AM"
  },
  {
    name: 'Minneapolis - St. Paul',
    depart_time: "10 AM"
  },
  {
    name: 'St. Cloud',
    depart_time: "11 AM"
  },
  {
    name: 'Brainerd',
    depart_time: "12 PM"
  },
  {
    name: 'Duluth',
    depart_time: "1 PM"
  },
  {
    name: 'Bemidji',
    depart_time: "2 PM"
  },
];

const seedStations = () => Station.bulkCreate(stationData);

module.exports = seedStations;
