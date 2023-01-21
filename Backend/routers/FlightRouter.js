const express = require('express');
const router3 = express.Router();
const getFlights = require('../controllers/flightController');

router3.route('/').get(getFlights.getAllFlights);

module.exports = router3;