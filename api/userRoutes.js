const mongoose = require('mongoose');
const User = require('../models/User');
const db = require('../config/connection');
const router = require('express').Router();

/*
    - Creates new user
    - POST /api/users
    - body: {"userName": "string"}
*/
router.post('/', async (req, res) => {
    User.create({ userName: req.body.userName }, (err, user) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(user);
        }
    })
});

/*
    - Gets all users
    - GET /api/users
*/
router.get('/', async (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(users);
    });
});
module.exports = router;