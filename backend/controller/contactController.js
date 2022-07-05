const contract = require("../model/contact");
const { sendVerification } = require("../functions/verificationSender");
const Contact = require("../model/contact");
require("dotenv").config();

/**
 * @description Get one contact
 * @type GET
 * @url /api/contact/dashboard/getcontact
 */

const getContact = async (req, res) => {
  try {
    const contact = await Contact.find({});
    return res.status(200).json({ success: true, data: contact });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error getting contact" });
  }
};

/**
 * @description Create one contact
 * @type POST
 * @url /api/contact/dashboard/postcontact
 */

const postContact = async (req, res) => {
  const { address, phoneNumber } = req.body;
  try {
    const contact = await Contact.create({ address, phoneNumber });
    return res.status(200).json({ success: true, data: contact });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error posting contact" });
  }
};

/**
 * @description Edits one contact
 * @type PATCH
 * @url /api/contact/dashboard/editcontact
 */

const editContact = async (req, res) => {
  const body = req.body;
  try {
    const contact = await Contact.find({});
    Object.assign(contact, body);
    const contactUpdated = await contact.find({});
    return res
      .status(200)
      .json({ success: true.valueOf, data: contactUpdated });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error editing contact" });
  }
};

/**
 * @description Sends email with contact data to admin
 * @type POST
 * @url /api/contact/sendcontact
 */

const sendContact = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    const options = {
      subject: "Email contact response",
      text: fullName + "..." + email + "..." + message,
      html: `<h1>FullName: ${fullName}</h1>
    <p>Email: ${email}</p>
    <p>message: ${message}</p>`,
    };
    await sendVerification(
      process.env.EMAIL,
      options.subject,
      options.text,
      options.html
    );
    return res
      .status(200)
      .json({ success: true, message: "mail has been sent" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error sending mail" });
  }
};
module.exports = {
  getContact,
  postContact,
  editContact,
  sendContact,
};
