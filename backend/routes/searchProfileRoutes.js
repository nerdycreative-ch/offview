const router = require("express").Router();
const {
  getAllSearchProfiles,
  getOneSearchProfile,
  createSearchProfile,
  deleteSearchProfile,
  editSearchProfile,
} = require("../controller/searchProfileController");

router.get("/getall", getAllSearchProfiles);
router.get("/getone/:id", getOneSearchProfile);
router.post("/create", createSearchProfile);
router.delete("/delete/:id", deleteSearchProfile);
router.patch("/patch/:id", editSearchProfile);

module.exports = router;
