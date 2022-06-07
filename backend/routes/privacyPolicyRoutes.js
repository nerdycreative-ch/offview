const router = require("express").Router();

const {
  privacyPolicyGet,
  privacyPolicyPost,
  privacyPolicyPatch,
  privacyPolicyDelete,
} = require("../controller/privacyPolicyController");

//routes
router.get("/dashboard/get", privacyPolicyGet);
router.post("/dashboard/post", privacyPolicyPost);
router.patch("/dashboard/patch/:id", privacyPolicyPatch);
router.delete("/dashboard/delete/:id", privacyPolicyDelete);

module.exports = router;
