const Socialmedia = require("../model/socialmedia");

/**
 * @description get all socialmedia
 * @type GET
 * @url socialmedia/dashboard/getall
 */

const socialmediaGet = async (req, res) => {
  try {
    const socialmedia = await Socialmedia.find({});
    return res.status(200).json({ success: true, imprinti: socialmedia });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get socialmedia" });
  }
};

/**
 * @description Get one socialmedia
 * @type GET
 * @url socialmedia/dashboard/getone
 */

const socialmediaGetOne = async (req, res) => {
  try {
    const socialmedia = await Socialmedia.findOne({ _id: req.params.id });
    return res.status(200).json({ success: true, imprinti: socialmedia });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get socials" });
  }
};

/**
 * @description Create socialmedia
 * @type POST
 * @url socialmedia/dashboard/post
 */
const socialmediaPost = async (req, res) => {
  const { icon, url } = req.body;
  try {
    const socialmedia = await Socialmedia.create({
      icon,
      url,
    });
    return res.status(200).json({ success: true, data: socialmedia });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't post social" });
  }
};

/**
 * @description Edit socialmedia
 * @type PATCH
 * @url socialmedia/dashboard/patch/:id
 */

const socialmediaPatch = async (req, res) => {
  const body = req.body;
  try {
    const socialmedia = await Socialmedia.findById({ _id: req.params.id });
    await Object.assign(socialmedia, body);
    await socialmedia.save();
    return res.status(200).json({ success: true, data: socialmedia });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't edit social" });
  }
};

/**
 * @description Delete socialmedia
 * @type DELETE
 * @url socialmedia/dashboard/delete/:id
 */

const socialmediaDelete = async (req, res) => {
  try {
    await Socialmedia.deleteOne({ _id: req.params.id });
    return res.status(200).json("Succesfully deleted socials");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't delete socials" });
  }
};

module.exports = {
  socialmediaGet,
  socialmediaPost,
  socialmediaPatch,
  socialmediaDelete,
  socialmediaGetOne,
};
