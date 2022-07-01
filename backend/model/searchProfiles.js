const mongoose = require("mongoose");

//reverse geocoding api
//https://maps.googleapis.com/maps/api/geocode/json?latlng=16.66667,101.18333&key=YOUR_API_KEY

const searchProfilesSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  advertisementType: {
    type: String,
    enum: ["investmentproperties", "land", "newbuildingprojects"],
  },
  propertyType: {
    type: String,
    enum: ["living", "commercial", "residentialandcommercial"],
  },
  region: {
    type: String,
  },
  minPrice: {
    type: Number,
  },
  maxPrice: {
    type: Number,
  },

  //geolocations
  // address: {
  //   type: String,
  //   required: [true, "Please add an adress"],
  // },
  // location: {
  //   type: {
  //     type: String, // Don't do `{ location: { type: String } }`
  //     enum: ["Point"], // 'location.type' must be 'Point'
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: "2dsphere",
  //   },
  //   formatedAdress: String,
  //   country: String,
  //   state: String,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

// searchProfilesSchema.pre("save", async function (next) {
//   const locat = await geocoder.geocode(this.address);
//   this.location = {
//     type: "Point",
//     coordinates: [locat[0].longitude, locat[0].latitude],
//     formattedAddress: locat[0].formattedAddress,
//   };
//   next();
// });

module.exports = mongoose.model("searchProfiles", searchProfilesSchema);
