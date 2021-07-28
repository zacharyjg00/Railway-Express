const router = require('express').Router();
const { Passenger, Station, Reservation } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/train', async (req, res) => {
  try {
    const reservationData = await Reservation.findAll({});

    const reservations = reservationData.map((reservation) => reservation.get({ plain: true }));


    const passengerData = await Passenger.findAll({});

    const passengers = passengerData.map((passenger) => passenger.get({ plain: true }));

    let passengerReservations = [];
    passengers.forEach(passenger => {
      reservations.forEach(reservation => {
        if (reservation.passenger_id == passenger.id) {
          passengerReservations.push(passenger);
        }
      });
    });

    res.render('train', {
      passengerReservations,
      logged_in: true
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

router.get("/reservation", async (req, res) => {
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
