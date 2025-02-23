const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({

    visits: {
        type: Number, default: 0
    }
});

module.exports = mongoose.model('Visitor', visitorSchema);
