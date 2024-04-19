const router = require('express').Router();
const rooms = require('./rooms.route');
const bookings = require('./bookings.route');
const users = require('./users.route');

router.use('/rooms', rooms);
router.use('/bookings', bookings);
router.use('/users', users);

module.exports = router;
