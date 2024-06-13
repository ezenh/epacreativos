// invitationsClientModel.js
const mongoose = require("mongoose");

const invitationsClientSchema = new mongoose.Schema({
    _id: String,
    event_type: String,
    theme: String,
    name: String,
    lastname: String,
    phone: String,
    date_start: String,
    date_end: String,
    __v: { type: Number, default: 1 }
})

const InvitationsClient = mongoose.model("Invitations", invitationsClientSchema);

module.exports = InvitationsClient;