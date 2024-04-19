// Rooms route
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const verifyToken = require('../middleware/authMiddleware');

// To get all Rooms
router.get('/', verifyToken, controllers.rooms.getAllRooms);
router.post('/add', controllers.rooms.addRoom);

module.exports = router;
