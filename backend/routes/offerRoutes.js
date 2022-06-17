const router = require("express").Router();
const {
  getOffer,
  createOffer,
  rejectOffer,
  approveOffer,
  getAllOffers,
} = require("../controller/offerController");
const authGuard = require("../middleware/auth-guard");

router.get("/getoffer", authGuard, getOffer);
router.get("/getalloffers", authGuard, getAllOffers);
router.post("/createoffer", authGuard, createOffer);
router.delete("/rejectoffer", authGuard, rejectOffer);
router.post("/approveoffer", authGuard, approveOffer);

module.exports = router;
