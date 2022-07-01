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
 * @url /searchprofiles/getall
 */

const getAllSearchProfiles = async (req, res) => {
  try {
    const id = req.user._id;
    const searchprofile = await Searchprofile.find({
      account: id,
    });
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
 * @url /searchprofiles/getone/:id
 */

const getOneSearchProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const searchprofile = await Searchprofile.findOne({ _id: id });
    const advertisement = await advertisementBaseSchema.aggregate().match({
      $and: [
        { advertisementType: searchprofile.advertisementType },
        { town: searchprofile.region },
        { propertyType: searchprofile.propertyType },
        {
          salesPrice: {
            $gte: searchprofile.minPrice,
            $lte: searchprofile.maxPrice,
          },
        },
      ],
    });
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
 * @url /searchprofiles/create
 */

const createSearchProfile = async (req, res) => {
  try {
    const user = req.user;
    const { advertisementType, propertyType, region, minPrice, maxPrice } =
      req.body;

    const searchprofile = await Searchprofile.create({
      account: user._id,
      advertisementType,
      propertyType,
      region,
      minPrice,
      maxPrice,
    });

    const advertisement = await advertisementBaseSchema.aggregate().match({
      $and: [
        { advertisementType: advertisementType },
        { propertyType: propertyType },
        { town: region },
        { salesPrice: { $gte: minPrice, $lte: maxPrice } },
      ],
    });

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
 * @url /searchprofiles/delete/:id
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
 * @url /searchprofiles/patch/:id
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
