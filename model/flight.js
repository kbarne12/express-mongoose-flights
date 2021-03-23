const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], defualt: 'DEN'},
    flightNo: { type: Number, min: 10, max: 9999, required: true},
    departs: {type: Date, default: function() {
        const date = new Date();
        return date.setFullYear(date.getFullYear() + 1);
    }
},
    destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
})

module.exports = mongoose.model('Flight', flightSchema)