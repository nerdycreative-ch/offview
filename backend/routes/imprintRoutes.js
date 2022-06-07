const router = require("express").Router();
const {
  imprintInfoGet,
  imprintInfoPost,
  imprintInfoPatch,
  imprintInfoDelete,
  imprintGet,
  imprintPost,
  imprintPatch,
  imprintDelete,
  imprintGetOne,
} = require("../controller/imprintController");

//routes for contact area

router.get("/dashboard/information/get", imprintInfoGet);
router.post("/dashboard/information/post", imprintInfoPost);
router.patch("/dashboard/information/patch", imprintInfoPatch);
router.delete("/dashboard/information/delete", imprintInfoDelete);

//normal routes

router.get("/dashboard/getall", imprintGet);
router.get("/dashboard/getone", imprintGetOne);
router.post("/dashboard/post", imprintPost);
router.patch("/dashboard/patch/:id", imprintPatch);
router.delete("/dashboard/delete/:id", imprintDelete);

module.exports = router;
