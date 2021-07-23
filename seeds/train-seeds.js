const { Train } = require('../models');

const trainData = [
  {
    capacity: 250,
    schedule_id: 1,
  },
  
  {
    capacity: 200,
    schedule_id: 3,
  },

  {
    capacity: 150,
    schedule_id: 3,
  },

  {
    capacity: 200,
    schedule_id: 2,
  },

  {
    capacity: 250,
    schedule_id: 1,
  },

  {
    capacity: 75,
    schedule_id: 4,
  },

 
];

const seedTrain = () => Train.bulkCreate(trainData);

module.exports = seedTrain;
