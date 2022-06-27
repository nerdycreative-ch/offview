const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
