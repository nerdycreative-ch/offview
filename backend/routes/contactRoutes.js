const router = require("express").Router();

const {
  getContact,
  postContact,
  editContact,
  sendContact,
} = require("../controller/contactController");

//text part
router.get("/dashboard/getcontact", getContact);
router.post("/dashboard/postcontact", postContact);
router.patch("/dashboard/editcontact", editContact);

//send email part
router.post("/sendcontact", sendContact);

module.exports = router;
