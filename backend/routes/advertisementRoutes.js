const router = require("express").Router();
const {
  advertisement_Get,
  advertisement_GetAll,
  advertisement_Post,
  advertisement_Patch,
  advertisement_Delete,
} = require("../controller/advertisementController");

// route to get one advertisement
router.get("/dashboard/getOne/:id", advertisement_Get);
// route to get all advertisements
router.get("/dashboard/getAll", advertisement_GetAll);
// route to post an advertisement
router.post("/dashboard/createAdvertisement", advertisement_Post);

// route to edit an advertisement
router.patch("/dashboard/edit/:id", advertisement_Patch);
// route to delete an advertisement
router.delete("/dashboard/delete/:id", advertisement_Delete);
// route to search an advertisement

module.exports = router;
