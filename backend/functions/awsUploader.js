const Advertisement = require("../model/createAdvertisement/Advertisement");

//image uploader requires
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const { download } = require("express/lib/response");
const res = require("express/lib/response");

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
  const bucketi = undefined;
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
  await s3.upload(uploadParams).promise();
};

const getFileStream = (fileKey, bucketName) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketi,
  };
  return s3.getObject(downloadParams).createReadStr;
  eam();
};

const deleteFileStream = async (fileKey, type) => {
  const bucketi = undefined;
  if (type === "file") {
    bucketi = process.env.FILE_BUCKET_NAME;
  } else if (type === "image") {
    bucketi = process.env.IMAGE_BUCKET_NAME;
  } else {
    console.log("Wrong Type of file");
  }
  const url = `https://${bucketi}.s3.eu-central-1.amazonaws.com/${fileKey}`;
  const advertisementFile = await Advertisement.findOne({ file: url });
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

  Advertisement.deleteOne({ _id: advertisementFile._id });
};

//aws doesn't support edit files it rewrites them(just a test)
const editFile = async (file, fileKey) => {
  try {
    await deleteFileStream(fileKey);
    await uploadFile(file);
    res.status(200).json("file has been edited");
  } catch (err) {
    console.log(err);
    res.status(404).json("file has failed editing");
  }
};

module.exports = {
  uploadFile,
  getFileStream,
  deleteFileStream,
  editFile,
};
