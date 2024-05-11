const mongoose = require('mongoose');

const bookingSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    userId: String,
   MobileNo:String,
    BusType :String
})
module.exports = mongoose.model("bookings",bookingSchema);