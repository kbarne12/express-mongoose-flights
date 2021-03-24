const mongoose = require('mongoose')
const Schema = mongoose.Schema



const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min:0}
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], defualt: 'DEN'},
    flightNo: { type: Number, min: 10, max: 9999, required: true},
    departs: {type: Date, default: function() {
        const date = new Date();
        return date.setFullYear(date.getFullYear() + 1);
    }
},
    destinations: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Destination'}], 
tickets: [ticketSchema],

})

module.exports = mongoose.model('Flight', flightSchema)
