const { Train } = require('../models');

const trainData = [
  {
    name: "Train1",
    capacity: 250,
    // schedule: ["8", "9"],
  },

  {
    name: "Train2",
    capacity: 250,
    // schedule: ["8", "9"],
  },

  {
    name: "Train3",
    capacity: 250,
    // schedule: ["8", "9"],
  },

  {
    name: "Train4",
    capacity: 250,
    // schedule: ["8", "9"],
  },

  {
    name: "Train5",
    capacity: 250,
    // schedule: ["8", "9"],
  },

  {
    name: "Train6",
    capacity: 250,
    // schedule: ["8", "9"],
  },
];

const seedTrain = () => Train.bulkCreate(trainData);

module.exports = seedTrain;
