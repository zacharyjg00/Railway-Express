// import models
const Passenger = require('./Passenger');
const Schedule = require('./Schedule');
const Station = require('./Station');
const Train = require('./Train');

// passenger belongsTo schedule
Passenger.belongsTo(Schedule, {
  foreignKey: 'schedule_id',
  onDelete: "CASCADE",
});

// schedule has many passengers
Schedule.hasMany(Passenger, {
  foreignKey: 'schedule_id',
});


// schedule belongsTo train
Schedule.hasMany(Train, {
  foreignKey: 'schedule_id',
  onDelete: "CASCADE",
});

// train has many schedule
Train.belongsTo(Schedule, {
  foreignKey: 'schedule_id',
});


// Station belongsTo schedule
Station.belongsTo(Schedule, {
  foreignKey: 'schedule_id',
  onDelete: "CASCADE",
});

// schedule has many stations
Schedule.hasMany(Station, {
  foreignKey: 'schedule_id',
});


module.exports = {
  Passenger,
  Schedule,
  Station,
  Train,
};
