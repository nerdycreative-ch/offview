const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const Profile = require("../model/profile");
require("dotenv").config();

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  accessKeyId,
  secretAccessKey,
  region,
});

const upload = (type) => {
  let bucketname = undefined;
  if (type === "file") {
    bucketname = process.env.FILE_BUCKET_NAME;
  } else if (type === "image") {
    bucketname = process.env.IMAGE_BUCKET_NAME;
  } else if (type === "profile") {
    bucketname = process.env.PROFILE_BUCKET_NAME;
  }
  return multer({
    storage: new multerS3({
      s3,
      bucket: bucketname,
      metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); //use Date.now() for unique file keys
      },
    }),
  });
};

module.exports = upload;
