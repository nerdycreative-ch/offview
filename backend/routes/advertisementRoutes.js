const router = require("express").Router();
const authGuard = require("../middleware/auth-guard");
const multer = require("multer");
const checkRole = require("../middleware/authProtect");
const upload = multer({ dest: "uploads/" });

//controllers
const {
  advertisement_Get,
  advertisement_GetAll,
  advertisement_GetAllWeb,
  advertisement_Post,
  advertisement_Patch,
  advertisement_Delete,

  downloadFile,

  uploadAfter,
  patchAfter,
  deleteAfter,

  uploadFileAfter,
  patchFileAfter,
  deleteFileAfter,
} = require("../controller/advertisementController");
const {
  getOffer,
  createOffer,
  rejectOffer,
  approveOffer,
  getAllOffers,
} = require("../controller/offerController");

const {
  getOne,
  getAll,
  approveAdvertisement,
  rejectAdvertisement,
  getOneUser,
  getAllUsers,
  approveUser,
  rejectUser,
} = require("../controller/adminController");

//routes\\

router.get("/dashboard/getOne/:id", advertisement_Get);
router.get("/dashboard/getAll", authGuard, advertisement_GetAll);
router.get("/dashboard/getallweb", advertisement_GetAllWeb);
router.post(
  "/dashboard/createAdvertisement",
  upload.fields([
    { name: "file", maxCount: 3 },
    { name: "image", maxCount: 3 },
  ]),
  authGuard,
  advertisement_Post
);
router.patch("/dashboard/edit/:id", advertisement_Patch);
router.delete("/dashboard/delete/:id", advertisement_Delete);

///

//upload image after creation if u need
router.post(
  "/dashboard/image/uploadafter/:id",
  upload.array("image", 3),
  uploadAfter
);
//edits image after creation if u need
router.put(
  "/dashboard/image/patchafter/:id",
  upload.single("image"),
  patchAfter
);
router.delete("/dashboard/image/deleteafter/:id/:key", deleteAfter);

//upload, edit and delete file after creation
router.post(
  "/dashboard/file/uploadafter/:id",
  upload.array("file", 3),
  uploadFileAfter
);
router.put(
  "/dashboard/file/patchafter/:id",
  upload.single("file"),
  patchFileAfter
);
router.delete("/dashboard/file/deleteafter/:id/:key", deleteFileAfter);

//download file
router.get("/dashboard/image/downloadfile/:key", downloadFile);

//admin methods for approving or rejecting advertisement and users

router.get("/dashboard/admin/getone/:id", getOne);
router.get("/dashboard/admin/getall", getAll);
router.patch(
  "/dashboard/admin/approve/:id",
  //checkRole("admin", "admin"),
  //authGuard,
  approveAdvertisement
);

router.patch(
  "/dashboard/admin/reject/:id",
  //checkRole("admin", "admin"),
  // authGuard,
  rejectAdvertisement
);
router.get("/dashboard/admin/user/getone/:id", getOneUser);
router.get("/dashboard/admin/user/getall", getAllUsers);
router.patch("/dashboard/admin/user/approve/:id", approveUser);
router.patch("/dashboard/admin/user/reject/:id", rejectUser);

//offers

router.get("/:id/getoffer", authGuard, getOffer);
router.get("/:id/getalloffers", authGuard, getAllOffers);
router.post("/:id/createoffer", authGuard, createOffer);
router.delete("/:id/rejectoffer", authGuard, rejectOffer);
router.post("/:id/approveoffer", authGuard, approveOffer);

module.exports = router;
