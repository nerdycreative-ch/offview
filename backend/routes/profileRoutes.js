const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const upload = multer({ dest: "uploads/" });
const authGuard = require("../middleware/auth-guard");
const {
  uploadFile,
  getFileStream,
  deleteFileStream,
  editFile,
} = require("../functions/awsUploader");
const {
  getOneProfile,
  getAllProfiles,
  createProfile,
  editProfile,
  deleteProfile,
} = require("../controller/profileController");

//getOne profile
router.get("/dashboard/getOne", getOneProfile);

//getAll profiles
router.get("/dashboard/getAll", getAllProfiles);

//create profile
router.post(
  "/dashboard/createprofile",
  authGuard,
  upload.single("avatar"),
  createProfile
);

//edit profile
router.patch("/dashboard/editprofile", editProfile);

//delete profile
router.delete("/dashboard/deleteprofile", deleteProfile);

module.exports = router;
