// WebsClientModel.js
const mongoose = require("mongoose");

const websClientSchema = new mongoose.Schema({
    _id: String,
    businessName: String,
    contactName: String,
    phone: String,
    __v: { type: Number, default: 1 }
})

const WebsClient = mongoose.model("webs", websClientSchema);

module.exports = WebsClient;