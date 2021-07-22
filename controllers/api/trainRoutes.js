const router = require('express').Router();
const { Train } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newTrain = await Train.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newTrain);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const trainData = await Train.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!trainData) {
      res.status(404).json({ message: 'No train found with this id!' });
      return;
    }

    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;