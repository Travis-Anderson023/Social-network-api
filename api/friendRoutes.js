const mongoose = require('mongoose');
const User = require('../models/User');
const router = require('express').Router();

/*
    - Adds a friend to a user
    - PUT /friends/:Id/:friendid
*/
router.put('/:id/:friendId', async (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $push: { friends: { userId: 'test' } } }, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(user);
    });
});



module.exports = router;