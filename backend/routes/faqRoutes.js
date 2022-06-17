const router = require("express").Router();
const {
  faqGet,
  faqPost,
  faqPatch,
  faqDelete,
} = require("../controller/faqController");

router.get("/dashboard/get", faqGet);
router.post("/dashboard/post", faqPost);
router.patch("/dashboard/patch/:id", faqPatch);
router.delete("/dashboard/delete/:id", faqDelete);

module.exports = router;
