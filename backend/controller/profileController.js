const Profile = require("../model/profile");
const { baseSchema } = require("../model/User");
// const fs = require("fs");
// const util = require("util");
const {
  uploadFile,
  getFileStream,
  deleteFileStream,
  editFile,
} = require("../functions/awsUploader");
// const unlinkFile = util.promisify(fs.unlink);
require(`dotenv`).config();
const upload = require("../functions/multerS3Uploader");
const { text } = require("express");
const { isError, first } = require("lodash");

/**
 * @description Searches profile by name
 * @type GET
 * @url /api/profiles/dashboard/searchProfiles
 */
const searchProfiles = async (req, res) => {
  try {
    const querysearch = req.query.name;
    const querysearchreplaced = querysearch.replace("-", "");
    const profile = await Profile.aggregate()
      .search({
        index: "default",
        autocomplete: {
          query: `${querysearchreplaced}`,
          path: "fullName",
          fuzzy: {
            maxEdits: 2,
            prefixLength: 3,
          },
        },
      })
      .limit(5)
      .lookup({
        from: "users",
        localField: "account",
        foreignField: "_id",
        as: "userinfo",
      });

    if (profile.length == 0) {
      return res.status(404).json({
        success: false,
        message: "The name you typed didn't match with any profile",
      });
    }
    const profileData = {
      avatar: profile[0].avatar,
      gender: profile[0].userinfo[0].gender,
      firstName: profile[0].userinfo[0].firstName,
      lastName: profile[0].userinfo[0].lastName,
      phone: profile[0].userinfo[0].phoneNumber,
      email: profile[0].userinfo[0].email,
      street: profile[0].userinfo[0].street,
      country: profile[0].userinfo[0].country,
      postalCode: profile[0].userinfo[0].postalCode,
      mainrole: profile[0].userinfo[0].mainrole,
      role: profile[0].userinfo[0].role,
    };
    return res.status(200).json({ success: true, data: profileData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "profile not found" });
  }
};

/**
 * @description Gets your profile
 * @type GET
 * @url /api/profiles/dashboard/myprofile
 */
const getMyProfile = async (req, res) => {
  const { user } = req;
  try {
    const profile = await Profile.aggregate()
      .match({ account: user._id })
      .limit(1)
      .lookup({
        from: "users",
        localField: "account",
        foreignField: "_id",
        as: "userinfo",
      });
    if (profile.length() == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Profile was not found" });
    }
    const profileData = {
      avatar: profile[0].avatar,
      gender: profile[0].userinfo[0].gender,
      firstName: profile[0].userinfo[0].firstName,
      lastName: profile[0].userinfo[0].lastName,
      phone: profile[0].userinfo[0].phoneNumber,
      email: profile[0].userinfo[0].email,
      street: profile[0].userinfo[0].street,
      country: profile[0].userinfo[0].country,
      postalCode: profile[0].userinfo[0].postalCode,
      mainrole: profile[0].userinfo[0].mainrole,
      role: profile[0].userinfo[0].role,
    };
    return res.status(200).json({ success: true, data: profileData });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get profiles" });
  }
};

/**
 * @description Creates profile
 * @type POST
 * @url /api/profiles/dashboard/createprofile
 */
const createProfile = async (req, res) => {
  let { body, user } = req;
  try {
    const useri = await baseSchema.findOne({ _id: user._id });
    const profile = await Profile.create({
      account: useri._id,
      avatar: undefined,
      firstName: useri.firstName,
      lastName: useri.lastName,
      fullName: `${useri.firstName} ${useri.lastName}`,
    });
    return res.status(201).json({ success: true, data: profile });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error creating profile" });
  }
};

/**
 * @description Edits profile
 * @type PATCH
 * @url /api/profiles/dashboard/editprofile
 */
const editProfile = async (req, res) => {
  const { body, user } = req;
  const { firstName, lastName } = req.body;
  try {
    const id = user._id;
    const useri = await baseSchema.findOne({ _id: id });
    await Object.assign(useri, body);
    await useri.save();
    const profile = await Profile.findOne({ account: id });
    console.log(profile);
    if (firstName !== undefined || lastName !== undefined) {
      const fullName = `${firstName} ${lastName}`;
      const modifiedBody = { body, fullName: fullName };
      await Object.assign(profile, modifiedBody);
      await profile.save();
    }
    await Object.assign(profile, body);
    await profile.save();
    res.status(200).json({
      profile: profile,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error editing profile" });
  }
};

/**
 * @description Edits profile pic
 * @type PATCH
 * @url /api/profiles/dashboard/editprofilepic/
 */
const editProfilePic = async (req, res) => {
  const { user } = req;
  try {
    const uploadSingle = await upload("profile").single("avatar");
    uploadSingle(req, res, async (err) => {
      const file = req.file;
      console.log(file);
      if (!file) {
        return res
          .status(400)
          .json({ success: false, message: `no picture edited` });
      }
      const profile = await Profile.findOne({ account: user._id });
      profile.avatar = file.location;
      await profile.save();
      return res.status(200).json({ success: true, data: file.location });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error editing profile-pic" });
  }
};

module.exports = {
  getMyProfile,
  searchProfiles,
  createProfile,
  editProfile,
  editProfilePic,
};
