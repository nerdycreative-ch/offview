const { response } = require("express");
const upload = require("../functions/multerS3Uploader");
const {
  advertisementBaseSchema,
  invesmentCommercialSchema,
  invesmentLivingSchema,
  invesmentResidencialAndCommercialSchema,
} = require("../model/Advertisement");
require("dotenv").config();
const {
  uploadFile,
  getFileStream,
  deleteFileStream,
  putFile,
  imageUpload,
} = require("../functions/awsUploader");
const fs = require("fs-extra");
const util = require("util");
const { unlinkSync } = require("fs-extra");
//removes files from folder
const unlinkFile = util.promisify(fs.unlink);
const path = require("path");
const advertisementPagination = require("../functions/advertisementpagination.js");

/*
advertisement_Get,
advertisement_GetAll,
advertisement_Post,
advertisement_Put,
advertisement_Delete,
*/

/**
 * @description deletes files on folder upload after posting them to s3 bucket
 */

const deletefilesmethod = (req) => {
  req.files["image"].forEach((file) => {
    unlinkFile(file.path);
  });

  req.files["file"].forEach((file) => {
    unlinkFile(file.path);
  });
};

/**
 * @description Gets one advertisement
 * @type GET
 * @url /api/advertisements/dashboard/getOne/:id
 */

const advertisement_Get = async (req, res) => {
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
 * @description Gets all advertisement for web
 * @type GET
 * @url /api/advertisements/dashboard/getallweb
 */

const advertisement_GetAllWeb = async (req, res) => {
  try {
    const { location, minPrice, maxPrice, type, page, limit, sort } = req.query;
    const pageOptions = {
      page: parseInt(page, 10) || 0,
      limit: parseInt(limit, 10) || 10,
      sort: parseInt(sort),
    };
    let advertisements;
    if (maxPrice && minPrice && location && type) {
      advertisements = await advertisementBaseSchema.aggregate([
        {
          $match: {
            $and: [
              { advertisementType: type },
              { town: location },
              {
                salesPrice: {
                  $gte: parseInt(minPrice),
                  $lte: parseInt(maxPrice),
                },
              },
            ],
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
    } else {
      advertisements = await advertisementBaseSchema.aggregate().facet({
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
      });
    }

    if (advertisements == []) {
      return res
        .status(404)
        .json({ success: false, message: "No matches made" });
    }
    return res.status(200).json({
      success: true,
      data: advertisements,
      length: advertisements.totalCount,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error getting all advertisements" });
  }
};
/**
 * @description Gets all advertisement
 * @type GET
 * @url /api/advertisements/dashboard/getAll
 * @query page,limit,sort,search
 */

const advertisement_GetAll = async (req, res) => {
  const { page, limit, sort, search } = req.query;
  return advertisementPagination(
    page,
    limit,
    sort,
    search,
    "approved",
    req.user,
    res
  );
};

/**
 * @description Create advertisement
 * @type POST
 * @url /api/advertisements/dashboard/createAdvertisement
 */

const advertisement_Post = async (req, res) => {
  try {
    const user = req.user;
    const {
      advertisementType,
      propertyType,
      title,
      street,
      No,
      postcode,
      town,
      address,
      salesPrice,
      netRentalIncomePerYear,
      plotArea,
      destinationZoneType,
      yearOfConstruction,
      floors,
      cubature,
      numberOfGarage,
      numberOfUndergroundParkingSpace,
      numberOfOutdoorParkingSpace,
      passengerLift,
      electricCarChargingStation,
      buildingLease,
      totalActualRentalIncome,
      returnOnInvestment,
      typeOfFile,

      //comercial
      commercialUnits,
      commercialSpace,
      goodsLift,
      fibreOpticConnection,

      //living
      residentialUnits,
      livingSpace,
      minergieStandard,
      glassFibreConnection,
    } = JSON.parse(req.body.data);

    // upload file
    let filess = [];
    let promises = [];
    for (let i = 0; i < req.files["file"].length; ) {
      let fileSingle = req.files["file"][i];
      promises.push(uploadFile(fileSingle, "file"));
      i++;
    }
    await Promise.all(promises)
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          filess.push(data[i].Location);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //upload image
    let imagess = [];
    let promisesImg = [];
    for (let i = 0; i < req.files["image"].length; ) {
      let fileSingleImg = req.files["image"][i];
      promisesImg.push(uploadFile(fileSingleImg, "image"));
      i++;
    }

    await Promise.all(promisesImg)
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          imagess.push(data[i].Location);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    deletefilesmethod(req);

    if (propertyType === "living") {
      const living = await invesmentLivingSchema.create({
        account: user._id,
        advertisementType,
        propertyType,
        title,
        street,
        No,
        postcode,
        town,
        address,
        salesPrice,
        netRentalIncomePerYear,
        plotArea,
        destinationZoneType,
        yearOfConstruction,
        floors,
        cubature,
        numberOfGarage,
        numberOfUndergroundParkingSpace,
        numberOfOutdoorParkingSpace,
        passengerLift,
        electricCarChargingStation,
        buildingLease,
        totalActualRentalIncome,
        returnOnInvestment,
        typeOfFile,
        file: filess,
        image: imagess,
        residentialUnits,
        livingSpace,
        minergieStandard,
        glassFibreConnection,
      });
    } else if (propertyType === "commercial") {
      const coomercial = await invesmentCommercialSchema.create({
        account: user._id,
        advertisementType,
        propertyType,
        title,
        street,
        No,
        postcode,
        town,
        address,
        salesPrice,
        netRentalIncomePerYear,
        plotArea,
        destinationZoneType,
        yearOfConstruction,
        floors,
        cubature,
        numberOfGarage,
        numberOfUndergroundParkingSpace,
        numberOfOutdoorParkingSpace,
        passengerLift,
        electricCarChargingStation,
        buildingLease,
        totalActualRentalIncome,
        returnOnInvestment,
        typeOfFile,
        file: filess,
        image: imagess,
        commercialUnits,
        commercialSpace,
        goodsLift,
        fibreOpticConnection,
      });
    } else if (propertyType === "residentialandcommercial") {
      const resandcom = await invesmentResidencialAndCommercialSchema.create({
        account: user._id,
        advertisementType,
        propertyType,
        title,
        street,
        No,
        postcode,
        town,
        address,
        salesPrice,
        netRentalIncomePerYear,
        plotArea,
        destinationZoneType,
        yearOfConstruction,
        floors,
        cubature,
        numberOfGarage,
        numberOfUndergroundParkingSpace,
        numberOfOutdoorParkingSpace,
        passengerLift,
        electricCarChargingStation,
        buildingLease,
        totalActualRentalIncome,
        returnOnInvestment,
        typeOfFile,
        file: filess,
        image: imagess,
        residentialUnits,
        livingSpace,
        commercialUnits,
        commercialSpace,
        numberOfGarage,
        numberOfUndergroundParkingSpace,
        numberOfOutdoorParkingSpace,
        minergieStandard,
        goodsLift,
        fibreOpticConnection,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Wrong property type" });
    }
    console.log("uploaded");
    return res.status(200).json({
      success: true,
      message: "Advertisement has been created",
      files: filess,
      images: imagess,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error creating advertisement" });
  }
};

/**
 * @description Edit advertisenent
 * @type PATCH
 * @url /api/advertisements/dashboard/edit/:id
 */

const advertisement_Patch = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    await Object.assign(advertisement, body);
    await advertisement.save();
    return res
      .status(200)
      .json({ success: true, message: "Edited successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error editing advertisement" });
  }
};

/**
 * @description Delete advertisement
 * @type DELETE
 * @url /api/advertisements/dashboard/delete/:id
 */

const advertisement_Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });

    let splitiFile = [];
    let keyFile = [];

    let splitiImg = [];
    let keyImage = [];

    //img
    for (let i = 0; i < advertisement.image.length; i++) {
      splitiImg.push(advertisement.image[i].split("/"));
      keyImage.push(splitiImg[i][4]);
      await deleteFileStream(keyImage[i], "image");
    }

    //file
    for (let i = 0; i < advertisement.file.length; i++) {
      splitiFile.push(advertisement.file[i].split("/"));
      keyFile.push(splitiFile[i][4]);
      await deleteFileStream(keyFile[i], "file");
    }
    console.log(keyImage + " " + keyFile);
    await advertisementBaseSchema.deleteOne({ _id: id });

    return res
      .status(200)
      .json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error deleting advertisement" });
  }
};

//after for image

/**
 * @description Upload image after creating advertisement
 * @type POST
 * @url /api/advertisements/dashboard/image/uploadafter/:id
 */
const uploadAfter = async (req, res) => {
  const id = req.params.id;
  const advertisement = await advertisementBaseSchema.findOne({ _id: id });
  const promises = [];
  for (let i = 0; i < req.files.length; ) {
    let fileSingle = req.files[i];
    await promises.push(uploadFile(fileSingle, "image"));
    i++;
    await unlinkFile(fileSingle.path);
  }
  await Promise.all(promises)
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        advertisement.image.push(data[i].Location);
      }
      advertisement.save();
      return res.status(200).json({
        success: true,
        message: "uploaded image",
        data: advertisement,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description Edit file after creating advertisement
 * @type PATCH
 * @url /api/advertisements/dashboard/image/patchafter/:id/:key
 */
const patchAfter = async (req, res) => {
  try {
    const { id, key } = req.params;
    const file = req.file;
    let imageurlsplited = [];
    let imgKey = [];
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    for (let i = 0; i < advertisement["image"].length; ) {
      imageurlsplited.push(advertisement.image[i].split("/"));
      imgKey.push(imageurlsplited[i][4]);
      if (imgKey[i] === key) {
        await putFile(file, key, "image");
        await unlinkFile(file.path);
        return res
          .status(200)
          .json({ success: true, message: "successfully edited image" });
      }
      i++;
    }
    return res.status(404).json({ success: false, message: "key is wrong" });
  } catch (error) {
    console.log(err);
    return res
      .json(500)
      .json({ success: false, message: "error editing image" });
  }
};

/**
 * @description Delete file after creating advertisement
 * @type DELETE
 * @url /api/advertisements/dashboard/image/deleteafter/:id/:key
 */
const deleteAfter = async (req, res) => {
  try {
    const { id, key } = req.params;
    let imageurlsplited = [];
    let imageKey = [];
    const advertisement = await advertisementBaseSchema.findOne({ _id: id });
    for (let i = 0; i < advertisement.image.length; ) {
      imageurlsplited.push(advertisement.image[i].split("/"));
      imageKey.push(imageurlsplited[i][4]);
      if (imageKey[i] === key) {
        await deleteFileStream(key, "file");
        //deletes one from array
        await advertisement.image.splice(i, 1);
        advertisement.save();
        return res.status(200).json({
          success: true,
          message: "successfully deleted file",
          data: advertisement,
        });
      }
      i++;
    }
    return res.status(404).json({ success: false, message: "key is wrong" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "error deleting file" });
  }
};

//after for file

/**
 * @description Download file after creating advertisement
 * @type GET
 * @url /api/advertisements/dashboard/image/downloadfile/:key
 */
const downloadFile = async (req, res) => {
  try {
    const fotoja = await getFileStream(req.params.key, "file");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "error downloading file" });
  }
};
const uploadFileAfter = (req, res) => {};
const patchFileAfter = (req, res) => {};
const deleteFileAfter = (req, res) => {};

module.exports = {
  advertisement_Get,
  advertisement_GetAll,
  advertisement_GetAllWeb,
  advertisement_Post,
  advertisement_Patch,
  advertisement_Delete,

  downloadFile,

  uploadAfter,
  patchAfter,
  deleteAfter,

  uploadFileAfter,
  patchFileAfter,
  deleteFileAfter,
};
