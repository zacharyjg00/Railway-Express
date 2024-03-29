const router = require('express').Router();
const { Passenger } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const passengerData = await Passenger.create(req.body);

    req.session.save(() => {
      req.session.user_id = passengerData.id;
      req.session.logged_in = true;

      res.status(200).json(passengerData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const passengerData = await Passenger.findOne({ where: { email: req.body.email } });

    if (!passengerData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await passengerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = passengerData.id;
      req.session.logged_in = true;

      res.json({ user: passengerData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;