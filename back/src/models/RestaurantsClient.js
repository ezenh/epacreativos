// RestaurantsClientModel.js
const mongoose = require("mongoose");

const restaurantsClientSchema = new mongoose.Schema({
    _id: String,
    businessName: String,
    contactName: String,
    phone: String,
    __v: { type: Number, default: 1 }
})

const RestaurantsClient = mongoose.model("restaurants", restaurantsClientSchema);

module.exports = RestaurantsClient;