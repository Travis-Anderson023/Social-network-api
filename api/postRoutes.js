const mongoose = require('mongoose');
const User = require('../models/User');
const router = require('express').Router();

/*
    - New post for existing user
    - POST /posts/:userid
    - body: { "post": "string"}
*/
router.post('/:userId', async (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, { $push: { posts: { title: req.body.title, body: req.body.body, replies: [] } } }, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(user);
    });
});

module.exports = router;