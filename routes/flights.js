var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/newDestination', flightsCtrl.newDestination);
router.get('/new', flightsCtrl.new);
router.get('/:flightId', flightsCtrl.show)
router.post('/destinations', flightsCtrl.createDestination)
router.post('/', flightsCtrl.create);
router.post('/:id/destinations', flightsCtrl.addDestination)
router.post('/:id', flightsCtrl.createTicket);








module.exports = router;
