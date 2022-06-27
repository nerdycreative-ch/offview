const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    account: {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const offer = mongoose.model("offers", OfferSchema);

module.exports = offer;
