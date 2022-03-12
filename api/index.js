const router = require('express').Router();

const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/friends', friendRoutes);
router.use('/posts', postRoutes);

module.exports = router;