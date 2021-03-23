const Flight = require('../model/flight')

module.exports = {
   index, 
   new: newFlights,
   create,
   show,

   
}

function index(req, res){
    Flight.find({}, function (err, flights) {
        res.render('flights/flights'), {
            flights,
            title: 'All Flights'
        }
    })
}
function newFlights(req, res) {
    res.render('flights/new', {title: 'Add Flights'})
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        res.redirect(`/flights/${flight.id}`)
    })
}
function show(req, res) {
    Flight.findById(req.params.flightId, function(err, flight) {
        res.render('flights/show', 
        {title: 'Flight Details', 
        flight
        })
    })
}