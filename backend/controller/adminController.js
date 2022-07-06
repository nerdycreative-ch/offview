const { json } = require("body-parser");
const { advertisementBaseSchema } = require("../model/Advertisement");

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
    let advertisements;
    if (req.query.search) {
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
      advertisements = await advertisementBaseSchema.aggregate([
        {
          $match: { _id: { $exists: true } },
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
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    advertisement.stateOfAdvertisement = "approved";
    advertisement.save();
    return res.status(200).json({
      success: true,
      data: advertisement,
      message: "advertisement has been approved",
    });
  } catch (error) {
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
    const { message } = req.body;
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    advertisement.stateOfAdvertisement = "rejected";
    if (message) {
      advertisement.adminMessage = message;
      advertisement.save();
    } else {
      advertisement.adminMessage = "no messages from admin";
      advertisement.save();
    }
    return res.status(200).json({
      success: true,
      data: advertisement,
      message: "advertisement has been rejected",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error on server while approving advertisement",
    });
  }
};

module.exports = {
  getOne,
  getAll,
  approveAdvertisement,
  rejectAdvertisement,
};
