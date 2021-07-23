const { Schedule } = require('../models');

const scheduleData = [
  {
    depart_time: '10',
    arival_time: '8PM',
    depart_location: "Test",
    arival_location: "Test",
    train_id: 1,
    station_id: 1,
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;
