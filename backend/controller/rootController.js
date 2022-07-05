const {
  baseSchema,
  sownerSchema,
  sbrokerSchema,
  icompanySchema,
  iprivateSchema,
  rootSchema,
  adminSchema,
} = require("../model/User");

/**
 * @description Gets one admins info
 * @type GET
 * @url /root/dashboard/get/:id
 */

const getAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await baseSchema.findOne({ _id: id });
    return res.status(200).json({ success: true, data: admin });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "server error on getting admin" });
  }
};
/**
 * @description Gets all admins
 * @type GET
 * @url /root/dashboard/getall
 */
const getAllAdmins = async (req, res) => {
  try {
    const admins = await baseSchema.find({});
    return res.status(200).json({ success: true, data: admins });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "server error on getting all admins" });
  }
};
/**
 * @description create admins
 * @type POST
 * @url /root/dashboard/create
 */
const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminSchema.create({
      email,
      password,
      mainrole: "admin",
      role: "admin",
      gender: "unknown",
    });
    return res.status(200).json({ success: true, data: admin });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "server error on creating admin" });
  }
};

/**
 * @description Delete admin
 * @type DELETE
 * @url /root/dashboard/delete/:id
 */

const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await baseSchema.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "Admin has been deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "server error on deleting admin",
    });
  }
};

/**
 * @description Edit admin
 * @type PATCH
 * @url /root/dashboard/patch/:id
 */

const editAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const admin = await baseSchema.findOne({ _id: id });
    Object.assign(admin, body);
    admin.save();
    return res.status(200).json({ success: true, message: admin });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "server error on deleting admin",
    });
  }
};
/**
 * @description Create the root user
 * @type POST
 * @url /root/dashboard/createroot
 */

const createRoot = async (req, res) => {
  try {
    const { email, password } = req.body;
    const root = await rootSchema.create({
      email,
      password,
      mainrole: "root",
      role: "root",
      gender: "unknown",
    });
    return res.status(200).json({ success: true, data: root });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "server error on creating root" });
  }
};

module.exports = {
  getAdmin,
  getAllAdmins,
  createAdmin,
  deleteAdmin,
  editAdmin,
  createRoot,
};
