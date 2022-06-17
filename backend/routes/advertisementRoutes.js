const router = require("express").Router();
const {
  advertisement_Get,
  advertisement_GetAll,
  advertisement_Post,
  advertisement_Patch,
  advertisement_Delete,

  downloadFile,
  uploadAfter,
  patchAfter,
  deleteAfter,
} = require("../controller/advertisementController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// route to get one advertisement
router.get("/dashboard/getOne/:id", advertisement_Get);
// route to get all advertisements
router.get("/dashboard/getAll", advertisement_GetAll);

// route to post an advertisement
router.post(
  "/dashboard/createAdvertisement",
  upload.fields([
    { name: "file", maxCount: 3 },
    { name: "image", maxCount: 3 },
  ]),
  advertisement_Post
);

// route to edit an advertisement
router.patch("/dashboard/edit/:id", advertisement_Patch);

// route to delete an advertisement
router.delete("/dashboard/delete/:id", advertisement_Delete);

///

//upload image
router.post(
  "/dashboard/image/uploadafter/:id",
  upload.array("image", 3),
  uploadAfter
);

//put
router.put(
  "/dashboard/image/patchafter/:id",
  upload.single("image"),
  patchAfter
);

//delete
router.delete("/dashboard/image/deleteafter/:id/:key", deleteAfter);

//download file
router.get("/dashboard/image/downloadfile/:key", downloadFile);

module.exports = router;
