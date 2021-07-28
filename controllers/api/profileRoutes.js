const router = require('express').Router();
const { Passenger } = require('../../models');
const withAuth = require('../../utils/auth');
console.log("Into profiles")

router.put('/:id', withAuth, async (req, res) => {
    try {
        const passengerData = await Passenger.update(req.body, {
            where: {
                id: req.session.user_id,
            },
        });

        res.status(200).json(passengerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    console.log(req.params.id)
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
        const passengerData = await Passenger.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!passengerData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(passengerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;