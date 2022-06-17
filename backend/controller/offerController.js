const { log } = require("util");
const Offer = require("../model/offer");

/**
 * @description Gets one offer
 * @type GET
 * @url /offers/getoffer
 */
const getOffer = async (req, res) => {
  try {
    const id = req.params.id;
    const offer = await Offer.findOne({ _id: id });
    return res.status(200).json({ success: true, data: offer });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Error getting one offer" });
  }
};
const getAllOffers = (req, res) => {};

/**
 * @description create offer
 * @type POST
 * @url /offers/createoffer
 */
const createOffer = async (req, res) => {
  try {
    const { currentPrice, offerPrice } = req.body;
    const user = req.user;
    const offer = await Offer.create({
      account: user._id,
      currentPrice,
      offerPrice,
    });
    return res.status(500).json({ success: true, data: offer });
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
 * @url /offers/rejectoffer
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
