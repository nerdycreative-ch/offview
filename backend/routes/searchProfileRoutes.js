const router = require("express").Router();
const {
  getAllSearchProfiles,
  getOneSearchProfile,
  createSearchProfile,
  deleteSearchProfile,
  editSearchProfile,
} = require("../controller/searchProfileController");
const authGuard = require("../middleware/auth-guard");

router.get("/getall", authGuard, getAllSearchProfiles);
router.get("/getone/:id", authGuard, getOneSearchProfile);
router.post("/create", authGuard, createSearchProfile);
router.delete("/delete/:id", authGuard, deleteSearchProfile);
router.patch("/patch/:id", authGuard, editSearchProfile);

module.exports = router;
