const router = require('express').Router();
const { Passenger, Station, Reservation } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // const trainData = await Train.findAll({
    //   include: [
    //     {
    //       model: Passenger,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // const scheduleData = await Schedule.findAll({
    //   include: [
    //     {
    //       model: Passenger,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // const stationData = await Station.findAll({
    //   include: [
    //     {
    //       model: Passenger,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // const trains = trainData.map((train) => train.get({ plain: true }));
    // const schedules = scheduleData.map((schedule) => schedule.get({ plain: true }));
    // const stations = stationData.map((station) => station.get({ plain: true }));

    res.render('homepage', {
      // trains, schedules, stations,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const passengerData = await Passenger.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const passenger = passengerData.get({ plain: true });

    const reservationData = await Reservation.findOne({
      where: {
        passenger_id: req.session.user_id
      }
    });

    if (reservationData) {
      const reservation = reservationData.get({ plain: true });


      const stationData = await Station.findByPk(reservation.station_id);

      const station = stationData.get({ plain: true });

      res.render('profile', {
        ...passenger,
        reservation,
        station,
        logged_in: true
      });
    } else {
      res.render('profile', {
        ...passenger,
        logged_in: true
      })
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/reservation", (req, res) => {
  try {
    const stationData = await Station.findAll(reservation.station_id);

    const station = stationData.get({ plain: true });

    res.render('reservation', {
      station,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});



module.exports = router;
