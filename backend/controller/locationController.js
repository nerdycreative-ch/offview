const { rmSync } = require("fs");
const { logging } = require("googleapis/build/src/apis/logging");
const Location = require("../model/Location");

/**
 * @description Gets one location
 * @type GET
 * @url /api/location/dashboard/getlocation/:id
 */

const getLocation = async (req, res) => {
  const id = req.params.id;
  try {
    const location = await Location.findOne({ _id: id });
    return res.status(200).json({ success: true, data: location });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on getting location" });
  }
};

/**
 * @description Gets all locations
 * @type GET
 * @url /api/location/dashboard/getalllocations
 */

const getAllLocations = async (req, res) => {
  try {
    const location = await Location.find({});
    return res.status(200).json({ success: true, data: location });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on getting location" });
  }
};

/**
 * @description Gets all locations countries
 * @type GET
 * @url /api/location/dashboard/getcountries
 */
const getCountries = async (req, res) => {
  try {
    const location = await Location.find({});
    const countries = [];
    location.forEach((location) => {
      countries.push(location);
    });
    return res.status(200).json({ success: true, data: countries });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error on getting countries" });
  }
};

/**
 * @description Creates one advertisement
 * @type POST
 * @url /api/location/dashboard/getalllocations
 */

const createLocation = async (req, res) => {
  const { city, country } = req.body;
  try {
    const location = await Location.create({
      city,
      country,
    });
    return res.status(200).json({ success: true, data: location });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on getting location" });
  }
};

/**
 * @description Edits one advertisement
 * @type PATCH
 * @url /api/location/dashboard/getalllocations
 */

const editLocation = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const location = await Location.findOne({ _id: id });
    Object.assign(location, body);
    location.save();
    return res.status(200).json({ success: true, data: location });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on getting location" });
  }
};

/**
 * @description deletes one advertisement
 * @type DELETE
 * @url /api/location/dashboard/getalllocations
 */

const deleteLocation = async (req, res) => {
  const id = req.params.id;
  try {
    await Location.deleteOne({ _id: id });
    return res.status(200).json({ success: true, data: location });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on getting location" });
  }
};

module.exports = {
  getLocation,
  getAllLocations,
  createLocation,
  editLocation,
  deleteLocation,
  getCountries,
};
