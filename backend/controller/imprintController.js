const Imprint = require("../model/imprint/imprint");
const ImprintInfo = require("../model/imprint/imprintinfo");

/**
 * @description get all imprints
 * @type GET
 * @url imprit/dashboard/getall
 */

const imprintGet = async (req, res) => {
  try {
    const imprinti = await Imprint.find({});
    return res.status(200).json({ success: true, imprinti: imprinti });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get imprint" });
  }
};

/**
 * @description Get one imprints
 * @type GET
 * @url imprit/dashboard/getone
 */

const imprintGetOne = async (req, res) => {
  try {
    const imprinti = await Imprint.findOne({ _id: req.params.id });
    return res.status(200).json({ success: true, imprinti: imprinti });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get imprint" });
  }
};

/**
 * @description Create imprint
 * @type POST
 * @url imprint/dashboard/post
 */
const imprintPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const imprinti = await Imprint.create({ title: title, content: content });
    return res.status(200).json({ success: true, data: imprinti });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't post imprint" });
  }
};

/**
 * @description Edit imprint
 * @type PATCH
 * @url imprint/dashboard/patch/:id
 */

const imprintPatch = async (req, res) => {
  const body = req.body;
  try {
    const imprint = await Imprint.findById({ _id: req.params.id });
    await Object.assign(imprint, body);
    await imprint.save();
    return res.status(200).json({ success: true, data: imprint });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't edit imprint" });
  }
};

/**
 * @description Delete imprint
 * @type DELETE
 * @url imprint/dashboard/delete/:id
 */

const imprintDelete = async (req, res) => {
  try {
    await Imprint.deleteOne({ _id: req.params.id });
    return res.status(200).json("Succesfully deleted imprint");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't delete imprint" });
  }
};

//info methods

/**
 * @description Get imprintinfo
 * @type GET
 * @url imprint/dashboard/information/get
 */
const imprintInfoGet = async (req, res) => {
  try {
    const imprintinfo = await ImprintInfo.find({});
    return res.status(200).json({ success: true, data: imprintinfo });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't get imprintinfo" });
  }
};

/**
 * @description Create imprintinfo
 * @type POST
 * @url imprint/dashboard/information/post
 */
const imprintInfoPost = async (req, res) => {
  const { data, phoneNumber, email } = req.body;
  try {
    const imprintinfo = await ImprintInfo.create({
      data,
      phoneNumber,
      email,
    });
    return res.status(200).json({ success: true, data: imprintinfo });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't post imprintinfo" });
  }
};

/**
 * @description Edit imprintinfo
 * @type PATCH
 * @url imprint/dashboard/information/patch/:id
 */

const imprintInfoPatch = async (req, res) => {
  const body = req.body;
  try {
    const imprintinfo = await ImprintInfo.findOne({_id:req.params.id});
    await Object.assign(imprintinfo, body);
    await imprintinfo.save();
    return res.status(200).json({ success: true, data: imprintinfo });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't edit imprintinfo" });
  }
};

/**
 * @description Delete imprintinfo
 * @type DELETE
 * @url imprint/dashboard/information/delete/:id
 */

const imprintInfoDelete = async (req, res) => {
  try {
    await ImprintInfo.deleteOne({ _id: req.params.id });
    return res.status(200).json("Succesfully deleted imprintinfo");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Couldn't delete imprint" });
  }
};

module.exports = {
  imprintInfoGet,
  imprintInfoPost,
  imprintInfoPatch,
  imprintInfoDelete,
  imprintGet,
  imprintGetOne,
  imprintPost,
  imprintPatch,
  imprintDelete,
};
