const Searchprofile = require("../model/searchProfiles");

const {
  advertisementBaseSchema,
  invesmentCommercialSchema,
  invesmentLivingSchema,
  invesmentResidencialAndCommercialSchema,
} = require("../model/Advertisement");

const getSearchedAdvertisement = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "server error on getsearchedadvertisement",
    });
  }
};

/**
 * @description get all search profiles
 * @type GET
 * @url /searchprofile/getall
 */

const getAllSearchProfiles = async (req, res) => {
  try {
    const searchprofile = await Searchprofile.find({});
    return res.status(200).json({ success: true, data: searchprofile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "error on getting all search profiles",
    });
  }
};

/**
 * @description get one search profiles
 * @type GET
 * @url /searchprofile/getone/:id
 */

const getOneSearchProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const searchprofile = await Searchprofile.findOne({ _id: id });
    const advertisement = await advertisementBaseSchema.find().and([
      { advertisementType: searchprofile.advertisementType },
      { propertyType: searchprofile.propertyType },
      { town: searchprofile.region },
      {
        salesPrice: {
          $gte: searchprofile.minPrice,
          $lte: searchprofile.maxPrice,
        },
      },
    ]);
    if (advertisement == []) {
      return res
        .status(404)
        .json({ success: false, message: "No matches made" });
    }
    return res.status(200).json({
      success: true,
      data: advertisement,
      matches: advertisement.length,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "error on getting all search profiles",
    });
  }
};

/**
 * @description create search profiles
 * @type POST
 * @url /searchprofile/create
 */

const createSearchProfile = async (req, res) => {
  try {
    const { advertisementType, propertyType, region, minPrice, maxPrice } =
      req.body;

    const searchprofile = await Searchprofile.create({
      advertisementType,
      propertyType,
      region,
      minPrice,
      maxPrice,
    });

    const advertisement = await advertisementBaseSchema
      .find()
      .and([
        { advertisementType: advertisementType },
        { propertyType: propertyType },
        { town: region },
        { salesPrice: { $gte: minPrice, $lte: maxPrice } },
      ]);
    if (advertisement == []) {
      return res
        .status(404)
        .json({ success: false, message: "No matches made" });
    }
    return res.status(200).json({
      success: true,
      data: advertisement,
      matches: advertisement.length,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "error on getting all search profiles",
    });
  }
};
/**
 * @description delete one search profiles
 * @type DELETE
 * @url /searchprofile/delete/:id
 */

const deleteSearchProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const searchprofile = await Searchprofile.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "succesfully deleted" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on deleting search profile" });
  }
};

/**
 * @description edit one search profiles
 * @type DELETE
 * @url /searchprofile/patch/:id
 */
const editSearchProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const searchprofile = await Searchprofile.findOne({ _id: id });
    Object.assign(searchprofile, body);
    return res
      .status(200)
      .json({ success: true, message: "succesfully deleted" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error on deleting search profile" });
  }
};

module.exports = {
  getAllSearchProfiles,
  getOneSearchProfile,
  createSearchProfile,
  deleteSearchProfile,
  editSearchProfile,
};
