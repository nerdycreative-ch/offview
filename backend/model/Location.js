const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model("locations", locationSchema);
module.exports = Location;
