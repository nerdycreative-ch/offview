const { advertisementBaseSchema } = require("../model/Advertisement");

/**
 * @description Gets one advertisement
 * @type GET
 * @url /advertisements/dashboard/getOne/:id
 */
const approveAdvertisement = (req, res) => {};
/**
 * @description Gets one advertisement
 * @type GET
 * @url /advertisements/dashboard/getOne/:id
 */
const waitingAdvertisement = (req, res) => {};
/**
 * @description Gets one advertisement
 * @type GET
 * @url /advertisements/dashboard/getOne/:id
 */
const rejectAdvertisement = (req, res) => {};

module.exports = {
  approveAdvertisement,
  waitingAdvertisement,
  rejectAdvertisement,
};
