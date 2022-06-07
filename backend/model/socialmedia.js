const mongoose = require("mongoose");

const socialmediaSchema = mongoose.Schema({
  icon: {
    type: String,
    required: [true, "Icon is required"],
  },
  url: {
    type: String,
    required: [true, "Url is required"],
  },
});

const socialmedia = mongoose.model("socialmedia", socialmediaSchema);
module.exports = socialmedia;
