const { text } = require("express");
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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ProfileSchema.index({ name: "text" });

const Profile = mongoose.model("profiles", ProfileSchema);

module.exports = Profile;
