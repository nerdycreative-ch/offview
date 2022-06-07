const privacyPolicy = require("../model/privacyPolicy");

/**
 * @description Get all policy
 * @type GET
 * @url privacypolicy/dashboard/get
 */

const privacyPolicyGet = async (req, res) => {
  try {
    const privacy = await privacyPolicy.find({});
    return res.status(200).json({ success: true, privacy: privacy });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get private policy" });
  }
};

/**
 * @description Post policy
 * @type POST
 * @url privacypolicy/dashboard/post
 */

const privacyPolicyPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const privacy = await privacyPolicy.create({
      title,
      content,
    });
    return res
      .status(200)
      .json({ message: "It created successfully", data: privacy });
  } catch (err) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't post private policy" });
  }
};

/**
 * @description Edit policy
 * @type POST
 * @url privacypolicy/dashboard/patch/:id"
 */

const privacyPolicyPatch = async (req, res) => {
  try {
    const { body } = req;
    const privacy = await privacyPolicy.findById(req.params.id);
    Object.assign(privacy, body);
    privacy.save();
    return res.json({ privacy: privacy });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Couldn't edit private policy" });
  }
};

/**
 * @description Delete policy
 * @type POST
 * @url privacypolicy/dashboard/delete/:id"
 */

const privacyPolicyDelete = async (req, res) => {
  try {
    const updated = await privacyPolicy.deleteOne({ _id: req.params.id });
    return res.status(201).json("It deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Couldn't delete private policy" });
  }
};

module.exports = {
  privacyPolicyPost,
  privacyPolicyGet,
  privacyPolicyPatch,
  privacyPolicyDelete,
};
