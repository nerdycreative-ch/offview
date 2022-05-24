const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    account: {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId,
    },
    avatar: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("profiles", ProfileSchema);

module.exports = Profile;
