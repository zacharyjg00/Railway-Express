const router = require('express').Router();
const passengerRoutes = require('./passengerRoutes');

const stationRoutes = require('./stationRoutes');
const reservationRoutes = require('./reservationRoutes');

router.use('/passengers', passengerRoutes);
router.use('/station', stationRoutes);
router.use('/schedule', reservationRoutes);

module.exports = router;
