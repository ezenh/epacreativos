const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
    _id: String,
    event_type: String,
    theme: String,
    name: String,
    lastname: String,
    phone: String,
    date_start: Date,
    date_end: Date
});

module.exports = mongoose.model('Invitation', invitationSchema);