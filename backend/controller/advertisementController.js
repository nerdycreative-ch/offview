const { response } = require("express");
const upload = require("../functions/multerS3Uploader");
const {
  advertisementBaseSchema,
  invesmentCommercialSchema,
  invesmentLivingSchema,
  invesmentResidencialAndCommercialSchema,
} = require("../model/Advertisement");
require("dotenv").config();

/*
advertisement_Get,
advertisement_GetAll,
advertisement_Post,
advertisement_Put,
advertisement_Delete,
*/

/**
 * @description Gets one advertisement
 * @type GET
 * @url /advertisement/dashboard/getOne/:id
 */

const advertisement_Get = async (req, res) => {
  try {
    const id = req.params.id;
    const advertisement = await Advertisement.findOne({ _id: id });
    return res.status(200).json({ advertisement });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error getting the advertisement" });
  }
};

/**
 * @description Gets one advertisement
 * @type GET
 * @url /advertisement/dashboard/getAll
 */

const advertisement_GetAll = async (req, res) => {
  try {
    const advertisements = await Advertisement.find({});
    return res.status(200).json({ success: true, data: advertisements });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error getting all advertisements" });
  }
};

/**
 * @description Create advertisement
 * @type POST
 * @url /advertisement/dashboard/createAdvertisement
 */

const advertisement_Post = async (req, res) => {
  try {
    // const {
    //   advertisementType,
    //   propertyType,
    //   title,
    //   street,
    //   No,
    //   postcode,
    //   town,
    //   address,
    //   salesPrice,
    //   netRentalIncomePerYear,
    //   plotArea,
    //   destinationZoneType,
    //   yearOfConstruction,
    //   floors,
    //   cubature,
    //   numberOfGarage,
    //   numberOfUndergroundParkingSpace,
    //   numberOfOutdoorParkingSpace,
    //   passengerLift,
    //   electricCarChargingStation,
    //   buildingLease,
    //   totalActualRentalIncome,
    //   returnOnInvestment,
    //   typeOfFile,

    //   //comercial
    //   commercialUnits,
    //   commercialSpace,
    //   goodsLift,
    //   fibreOpticConnection,

    //   //living
    //   residentialUnits,
    //   livingSpace,
    //   minergieStandard,
    //   glassFibreConnection,
    // } = req.body;

    // basemodel = {
    //   advertisementType,
    //   propertyType,
    //   title,
    //   street,
    //   No,
    //   postcode,
    //   town,
    //   address,
    //   salesPrice,
    //   netRentalIncomePerYear,
    //   plotArea,
    //   destinationZoneType,
    //   yearOfConstruction,
    //   floors,
    //   cubature,
    //   numberOfGarage,
    //   numberOfUndergroundParkingSpace,
    //   numberOfOutdoorParkingSpace,
    //   passengerLift,
    //   electricCarChargingStation,
    //   buildingLease,
    //   totalActualRentalIncome,
    //   returnOnInvestment,
    //   typeOfFile,
    // };

    //upload multiple files
    const uploadMultipleFiles = await upload("image").array("image", 2);
    uploadMultipleFiles(req, res, async (err) => {
      if (!req.files) {
        return res
          .status(400)
          .json({ success: false, message: `no files found` });
      }
      let filearray = req.files;
      let fileLocation;
      const galleryImgLocationArray = [];
      for (let i = 0; i < filearray.length; i++) {
        fileLocation = filearray[i].location;
        galleryImgLocationArray.push(fileLocation);
      }
      res.json({
        filesarray: filearray,
        locationArray: galleryImgLocationArray,
      });
    });

    // ////upload multiple images
    // const uploadMultipleImages = await upload("image").array("image");
    // const images = uploadMultipleImages(req, res, async (err) => {
    //   if (!req.file) {
    //     return res
    //       .status(400)
    //       .json({ success: false, message: `no files found` });
    //   }
    //   return req.file;
    // });

    // if (propertyType === "Living") {
    //   const living = await invesmentLivingSchema.create({
    //     basemodel,
    //     file: files.location,
    //     image: images.location,
    //     residentialUnits,
    //     livingSpace,
    //     minergieStandard,
    //     //glassFibreConnection,
    //   });
    // } else if (propertyType === "Commercial") {
    //   const coomercial = await invesmentCommercialSchema.create({
    //     basemodel,
    //     file: files.location,
    //     image: images.location,
    //     commercialUnits,
    //     commercialSpace,
    //     goodsLift,
    //     fibreOpticConnection,
    //   });
    // } else if (propertyType === "Residential&Commercial") {
    //   const resandcom = await invesmentResidencialAndCommercialSchema.create({
    //     basemodel,
    //     file: files.location,
    //     image: images.location,
    //     residentialUnits,
    //     livingSpace,
    //     commercialUnits,
    //     commercialSpace,
    //     numberOfGarage,
    //     numberOfUndergroundParkingSpace,
    //     numberOfOutdoorParkingSpace,
    //     minergieStandard,
    //     goodsLift,
    //     fibreOpticConnection,
    //   });
    // } else {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Wrong property type" });
    // }
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
 * @url /advertisement/dashboard/edit/:id
 */

const advertisement_Patch = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const advertisement = await Advertisement.findOne({ _id: id });
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
 * @url /advertisement/dashboard/delete/:id
 */

const advertisement_Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const advertisement = await Advertisement.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error editing advertisement" });
  }
};

module.exports = {
  advertisement_Get,
  advertisement_GetAll,
  advertisement_Post,
  advertisement_Patch,
  advertisement_Delete,
};
