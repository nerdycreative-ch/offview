const router = require("express").Router();
const {
  getAllSearchProfiles,
  getOneSearchProfile,
  createSearchProfile,
  deleteSearchProfile,
  editSearchProfile,
} = require("../controller/searchProfileController");
const authGuard = require("../middleware/auth-guard");
// router.get("/getall/:id", authGuard, getAllSearchProfiles);
// router.get("/getone/:id", authGuard, getOneSearchProfile);
// router.post("/create", authGuard, createSearchProfile);
// router.delete("/delete/:id", authGuard, deleteSearchProfile);
// router.patch("/patch/:id", authGuard, editSearchProfile);
router.get("/getall/:id", getAllSearchProfiles);
router.get("/getone/:id", getOneSearchProfile);
router.post("/create", createSearchProfile);
router.delete("/delete/:id", deleteSearchProfile);
router.patch("/patch/:id", editSearchProfile);
module.exports = router;
