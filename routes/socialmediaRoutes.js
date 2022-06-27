const router = require("express").Router();
const {
  socialmediaGet,
  socialmediaGetOne,
  socialmediaPost,
  socialmediaPatch,
  socialmediaDelete,
} = require("../controller/socialmediaController");

router.get("/dashboard/getall", socialmediaGet);
router.get("/dashboard/getone", socialmediaGetOne);
router.post("/dashboard/post", socialmediaPost);
router.patch("/dashboard/patch/:id", socialmediaPatch);
router.delete("/dashboard/delete/:id", socialmediaDelete);

module.exports = router;
