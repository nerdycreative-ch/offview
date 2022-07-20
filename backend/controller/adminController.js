const { json } = require("body-parser");
const { advertisementBaseSchema } = require("../model/Advertisement");
const { baseSchema } = require("../model/User");

/**
 * @description Admin can get one advertisement
 * @type GET
 * @url /api/advertisements/dashboard/admin/getone/:id
 */
const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    return res.status(200).json({ advertisement });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error getting the advertisement" });
  }
};
/**
 * @description Admin can get all advertisements
 * @type GET
 * @url /api/advertisements/dashboard/admin/getall
 */
const getAll = async (req, res) => {
  try {
    //sort can be asc or desc
    const pageOptions = {
      page: parseInt(req.query.page, 10) || 0,
      limit: parseInt(req.query.limit, 10) || 10,
      sort: parseInt(req.query.sort),
    };
    pageOptions.page = pageOptions.page - 1;
    let advertisements;
    if (req.query.search) {
      console.log(pageOptions.page,pageOptions.limit,pageOptions.sort);
      pageOptions.search = req.query.search;
      advertisements = await advertisementBaseSchema.aggregate([
        {
          $search: {
            index: "default",
            autocomplete: {
              query: `${pageOptions.search}`,
              path: "title",
            },
          },
        },
        {
          $match: {
            stateOfAdvertisement: "waiting",
          },
        },
        {
          $facet: {
            totalData: [
              {
                $skip: pageOptions.page * pageOptions.limit,
              },
              {
                $limit: pageOptions.limit,
              },
              {
                $sort: {
                  yearOfConstruction: pageOptions.sort,
                },
              },
            ],
            totalCount: [
              {
                $count: "numberOAdvertisements",
              },
            ],
          },
        },
      ]);
    } else if (!req.query.search) {
      console.log("else")
      console.log(pageOptions.page,pageOptions.limit,pageOptions.sort)
      advertisements = await advertisementBaseSchema.aggregate([
        {
          $match: { stateOfAdvertisement: "waiting" },
        },
        {
          $facet: {
            totalData: [
              {
                $skip: pageOptions.page * pageOptions.limit,
              },
              {
                $limit: pageOptions.limit,
              },
              {
                $sort: {
                  yearOfConstruction: pageOptions.sort,
                },
              },
            ],
            totalCount: [
              {
                $count: "numberOAdvertisements",
              },
            ],
          },
        },
      ]);
    } else if (advertisements === []) {
      return res.json({ message: "no advertisements match" });
    }
    return res.status(200).json({
      success: true,
      data: advertisements,
      length: advertisements.totalCount,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error getting all the advertisements",
    });
  }
};

/**
 * @description Admin can approve advertisement
 * @type PATCH
 * @url /api/advertisements/dashboard/admin/approve/:id
 */
const approveAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const advertisement = await advertisementBaseSchema.findOneAndUpdate(
      { _id: id },
      { $set: { stateOfAdvertisement: "approved" } },
      { returnOriginal: false }
    );
    const user = await baseSchema.updateOne(
      { _id: advertisement.account },
      {
        $push: {
          notifications: {
            $each: [
              {
                notificationMessage: "Your advertisement has been approved",
                notificationUrl: `localhost:3001/advertisements/${id}`,
              },
            ],
            $sort: 1,
            $slice: 20,
          },
        },
      }
    );

    return res.status(200).json({
      success: true,
      data: advertisement,
      message: "advertisement has been approved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error on server while approving advertisement",
    });
  }
};
/**
 * @description Admin can reject advertisement
 * @type PATCH
 * @url /api/advertisements/dashboard/admin/reject/:id
 */
const rejectAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    let { message } = req.body;
    if (message == "" || !message) {
      message = "No message from admin";
    }
    console.log(message);
    const advertisement = await advertisementBaseSchema.findOneAndUpdate(
      { _id: id },
      { $set: { stateOfAdvertisement: "rejected", adminMessage: message } },
      { returnOriginal: false }
    );
    return res.status(200).json({
      success: true,
      data: advertisement,
      message: "advertisement has been rejected",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error on server while rejecting advertisement",
    });
  }
};
/**
 * @description Gets one user
 * @type GET
 * @url /api/advertisements/dashboard/admin/user/getone/:id
 */
const getOneUser = async (req, res) => {};
/**
 * @description Gets all users that are waiting
 * @type GET
 * @url /api/advertisements/dashboard/admin/user/getall/:id
 */
const getAllUsers = async (req, res) => {};

/**
 * @description Admin can approve user
 * @type PATCH
 * @url /api/advertisements/dashboard/admin/user/approve/:id
 */
const approveUser = async (req, res) => {};

/**
 * @description Admin can reject user
 * @type PATCH
 * @url /api/advertisements/dashboard/admin/user/reject/:id
 */
const rejectUser = async (req, res) => {};

module.exports = {
  getOne,
  getAll,
  approveAdvertisement,
  rejectAdvertisement,
  getOneUser,
  getAllUsers,
  approveUser,
  rejectUser,
};
