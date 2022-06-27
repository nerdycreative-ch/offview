const mongoose = require("mongoose");

const imprintInfoSchema = mongoose.Schema({
  data: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
});

const imprintInfo = mongoose.model("imprintinfo", imprintInfoSchema);
module.exports = imprintInfo;
