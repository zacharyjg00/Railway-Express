const router = require('express').Router();
const { Station } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newStation = await Staion.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStation);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const stationData = await Station.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!stationData) {
      res.status(404).json({ message: 'No station found with this id!' });
      return;
    }

    res.status(200).json(stationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;