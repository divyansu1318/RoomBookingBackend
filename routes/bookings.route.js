// Rooms route
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// To get all Rooms
router.post('/add', controllers.bookings.bookRoom);

module.exports = router;
