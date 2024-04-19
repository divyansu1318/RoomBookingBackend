// Rooms route
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// To get all Rooms
router.post('/login', controllers.users.login);

module.exports = router;
