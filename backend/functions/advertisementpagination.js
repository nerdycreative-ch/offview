const { advertisementBaseSchema } = require("../model/Advertisement");

const advertisementPagination = async (
  page,
  limit,
  sort,
  search,
  state,
  user,
  res
) => {
  try {
    //sort can be asc or desc
    const pageOptions = {
      page: parseInt(page, 10) || 0,
      limit: parseInt(limit, 10) || 10,
      sort: parseInt(sort),
    };
    let advertisements;
    if (search) {
      pageOptions.search = search;
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
            $and: [{ stateOfAdvertisement: state }, { account: user._id }],
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
    } else if (!search) {
      advertisements = await advertisementBaseSchema.aggregate([
        {
          $match: {
            $and: [{ stateOfAdvertisement: state }, { account: user._id }],
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

module.exports = advertisementPagination;
