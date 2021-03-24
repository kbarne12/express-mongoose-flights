const Flight = require('../model/flight')
const Destination = require('../model/destination')

module.exports = {
   index, 
   new: newFlights,
   create,
   show,
   createTicket,
   newDestination,
    createDestination,
    addDestination

   
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body.destinationId);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })

    
}

function createDestination(req, res) {
    Destination.create(req.body, function(err, destination) {
        res.redirect("/flights/newDestination")
    })
}

function newDestination(req, res) {
    res.render('destinations/new', {title: 'Add Destination'})
}



function createTicket (req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.tickets.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function index (req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/flights', {
            flights,
            title: 'All Flights'
        })
    })
}
function newFlights(req, res) {
    res.render('flights/new', {title: 'Add Flights'})
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        res.redirect(`/flights/${flight._id}`)
    })
}
function show (req, res) {
    Flight.findById(req.params.flightId)
    .populate('destinations').exec( function(err, flight) {
        Destination.find({_id: {$nin: flight.destinations}}
            , function(err, destinations){
            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                destinations

        })
        })
    })
}