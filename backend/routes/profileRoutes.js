const router = require("express").Router();
//old method
const multer = require("multer");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const upload = multer({ dest: "uploads/" });

const authGuard = require("../middleware/auth-guard");
const {
  getMyProfile,
  searchProfiles,
  createProfile,
  editProfile,
  editProfilePic,
} = require("../controller/profileController");

//get your profile profile
router.get("/dashboard/myprofile", authGuard, getMyProfile);

//search profiles by name
router.get("/dashboard/searchProfiles", searchProfiles);

//create profile
router.post("/dashboard/createprofile", authGuard, createProfile);

//edit profile
router.patch("/dashboard/editprofile", authGuard, editProfile);

//edit profile-pic
router.patch("/dashboard/editprofilepic", authGuard, editProfilePic);

module.exports = router;
