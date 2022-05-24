const Profile = require("../model/profile");
const { baseSchema } = require("../model/user");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
/**
 * @description Gets only one profile
 * @type GET
 * @url /dashboard/getOne
 */
const getOneProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const profile = await Profile.findOne({ _id: id });
    return res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get profile" });
  }
};

/**
 * @description Get all the profiles
 * @type GET
 * @url /dashboard/getAll
 */
const getAllProfiles = async (req, res) => {
  try {
    const profile = await Profile.find({});
    return res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get all profile" });
  }
};

/**
 * @description Creates profile
 * @type POST
 * @url /dashboard/createprofile
 */
const createProfile = async (req, res) => {
  const { body, file, user } = req;
  try {
    const useri = await baseSchema.findOne({ _id: user._id });

    const profile = await Profile.create({
      account: user._id,
      avatar: file.location,
      gender: useri.gender,
      name: useri.firstName + "" + useri.lastName,
      phone: useri.phoneNumber,
      address: useri.street + "" + useri.country,
      role: useri.mainrole,
      category: useri.role,
    });
    console.log(profile);
    const result = await uploadFile(file, "image");
    await unlinkFile(file.path);
    return res.status(201).json({ data: useri });
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
 * @url /dashboard/editprofile
 */
const editProfile = async (req, res) => {
  console.log("editProfile");
};

/**
 * @description Deletes profile
 * @type DELETE
 * @url /dashboard/deleteprofile
 */
const deleteProfile = async (req, res) => {
  console.log("delete");
};

module.exports = {
  getOneProfile,
  getAllProfiles,
  createProfile,
  editProfile,
  deleteProfile,
};
