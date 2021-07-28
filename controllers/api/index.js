const router = require('express').Router();
const passengerRoutes = require('./passengerRoutes');

const stationRoutes = require('./stationRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/passengers', passengerRoutes);
router.use('/station', stationRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;
