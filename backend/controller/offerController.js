const { log } = require("util");
const Offer = require("../model/offer");
const { advertisementBaseSchema } = require("../model/Advertisement");

/**
 * @description Gets one offer
 * @type GET
 * @url /advertisements/:id/getoffer/:id
 */
const getOffer = async (req, res) => {
  try {
    return res.status(200).json({ success: true, data: offer });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error getting one offer" });
  }
};
/**
 * @description Gets all offer
 * @type GET
 * @url /advertisements/:id/getoffer
 */

const getAllOffers = (req, res) => {
  try {
    return res.status(200).json({ success: true, data: offer });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error getting one offer" });
  }
};

/**
 * @description create offer
 * @type POST
 * @url /advertisements/:id/createoffer
 */
const createOffer = async (req, res) => {
  try {
    const { currentPrice, offerPrice } = req.body;
    const id = req.params.id;
    const user = req.user;
    const offer = await Offer.create({
      account: user._id,
      currentPrice,
      offerPrice,
    });
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    await advertisement.offers.push(offer);
    await advertisement.save();
    return res
      .status(200)
      .json({ success: true, data: offer, advertisement: advertisement });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error creating offer" });
  }
};

/**
 * @description rejected offer
 * @type Delete
 * @url /advertisements/:id/rejectoffer
 */
const rejectOffer = async (req, res) => {
  try {
    const id = req.params.id;
    const offer = await Offer.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "successfully deleted" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error on rejecting offer" });
  }
};

const approveOffer = (req, res) => {};

module.exports = {
  getOffer,
  createOffer,
  rejectOffer,
  approveOffer,
  getAllOffers,
};
