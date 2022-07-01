const router = require("express").Router();
const {
  getLocation,
  getAllLocations,
  createLocation,
  editLocation,
  deleteLocation,
  getCountries,
} = require("../controller/locationController");

router.get("/dashboard/getlocation/:id", getLocation);
router.get("/dashboard/getalllocations", getAllLocations);
router.get("/dashboard/getcountries", getCountries);
router.post("/dashboard/createlocation", createLocation);
router.patch("/dashboard/editlocation/:id", editLocation);
router.delete("/dashboard/deletelocation/:id", deleteLocation);

module.exports = router;
