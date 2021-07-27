const router = require('express').Router();
const { Train, Passenger, Schedule, Station } = require('../models');
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

router.get('/train/:id', async (req, res) => {
  try {
    const trainData = await Train.findByPk(req.params.id, {
      include: [
        {
          model: Passenger,
          attributes: ['name'],
        },
      ],
    });

    const scheduleData = await Schedule.findByPk(req.params.id, {
      include: [
        {
          model: Passenger,
          attributes: ['name'],
        },
      ],
    });

    const stationData = await Station.findByPk(req.params.id, {
      include: [
        {
          model: Passenger,
          attributes: ['name'],
        },
      ],
    });

    const train = trainData.get({ plain: true });
    const schedule = scheduleData.get({ plain: true });
    const station = stationData.get({ plain: true });

    res.render('train', 'schedule', 'station', {
      ...train, ...schedule, ...station,
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
      include: [{ model: Train }],
    });

    const passenger = passengerData.get({ plain: true });

    res.render('profile', {
      ...passenger,
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
