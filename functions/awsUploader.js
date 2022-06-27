const Advertisement = require("../model/Advertisement");

//image uploader requires
const fs = require("fs");
const AWS = require("aws-sdk");
const S3 = require("aws-sdk/clients/s3");
const { download } = require("express/lib/response");
const res = require("express/lib/response");
const path = require("path");
require(`dotenv`).config();

//image uploader
const region = process.env.AWS_REGION;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKey,
  secretAccessKey,
});

const uploadFile = async (file, type) => {
  const fileStream = await fs.createReadStream(file.path);
  let bucketi = undefined;
  if (type === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  }
  if (type === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  }
  if (type === "profile") {
    bucketi = process.env.PROFILE_BUCKET_NAME;
  }

  const uploadParams = {
    Bucket: bucketi,
    Body: fileStream,
    Key: file.filename,
  };
  return await s3.upload(uploadParams).promise();
};

const getFileStream = async (fileKey, type) => {
  let bucketi = undefined;
  if (type === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  }
  if (type === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  }
  if (type === "profile") {
    bucketi = process.env.PROFILE_BUCKET_NAME;
  }
  const downloadParams = {
    Bucket: bucketi,
    Key: fileKey,
  };
  //let file = fs.createWriteStream("C:");
  //return await s3.getObject(downloadParams)
  const rs = s3.getObject(downloadParams).createReadStream();
  const ws = fs.createWriteStream();
  return rs.pipe(ws);
};

const deleteFileStream = async (fileKey, type) => {
  let bucketi = undefined;
  if (type === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  } else if (type === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  } else if (type === "profile") {
    bucketi = process.env.PROFILE_BUCKET_NAME;
  } else {
    console.log("Wrong Type of file");
  }
  const url = `https://${bucketi}.s3.eu-central-1.amazonaws.com/${fileKey}`;

  const deleteParams = {
    Bucket: bucketi,
    Key: fileKey,
  };
  s3.deleteObject(deleteParams, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  }).promise();
};

//aws doesn't support edit files it rewrites them(just a test)
const putFile = async (file, fileKey, type) => {
  const fileStream = await fs.createReadStream(file.path);
  let bucketi = undefined;
  if (type === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  }
  if (type === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  }
  if (type === "profile") {
    bucketi = process.env.PROFILE_BUCKET_NAME;
  }

  const uploadParams = {
    Bucket: bucketi,
    Body: fileStream,
    Key: fileKey,
  };
  return await s3.upload(uploadParams).promise();
};

const imageUpload = async (base64, typeOfImage) => {
  let bucketi = undefined;
  if (typeOfImage === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  }
  if (typeOfImage === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  }
  if (typeOfImage === "profile") {
    bucketi = process.env.PROFILE_BUCKET_NAME;
  }

  AWS.config.setPromisesDependency(require("bluebird"));

  const base64Data = Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const type = base64.split(";")[0].split("/")[1];

  const filename = Math.floor(Math.random() * 1000) + "" + Date.now();

  const params = {
    Bucket: bucketi,
    Key: `${filename}.${type}`, // type is not required
    Body: base64Data,
    ContentEncoding: "base64", // required
    ContentType: `image/${type}`, // required. Notice the back ticks
  };

  try {
    const { Location, Key } = await s3.upload(params).promise();
    console.log(Location);
    return Location;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadFile,
  getFileStream,
  deleteFileStream,
  putFile,
  imageUpload,
};
