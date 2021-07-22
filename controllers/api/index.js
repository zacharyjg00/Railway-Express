const router = require('express').Router();
const passengerRoutes = require('./passengerRoutes');
const trainRoutes = require('./trainRoutes');

const stationRoutes = require('./stationRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/passengers', passengerRoutes);
router.use('/train', trainRoutes);
router.use('/station', stationRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;
