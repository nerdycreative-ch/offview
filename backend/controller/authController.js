const {
  baseSchema,
  sownerSchema,
  sbrokerSchema,
  icompanySchema,
  iprivateSchema,
} = require("../model/User");
const Profile = require("../model/profile");

const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const { randomBytes } = require("crypto");
const { sendVerification } = require("../functions/verificationSender");
const { fail } = require("assert");
const bcrypt = require("bcrypt");
const { Redshift } = require("aws-sdk");
const { clone } = require("lodash");

require(`dotenv`).config();

const hashMethod = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const updated = await bcrypt.hash(password, salt);
  return updated;
};

/**
 * @description Creates jwt token with a max age
 */

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.APP_SECRET, { expiresIn: maxAge });
};

/**
 * @description Creates profile for user
 */
const createProfile = async (useri) => {
  try {
    const profile = await Profile.create({
      account: useri._id,
      avatar: undefined,
      firstName: useri.firstName,
      lastName: useri.lastName,
      fullName: `${useri.firstName} ${useri.lastName}`,
    });
    console.log("Profile has been created");
  } catch (error) {
    console.log("Profile wasn't created", err);
  }
};

/**
 * @description Renders signup page
 * @type GET
 * @url /api/users/signup
 */
const signup_get = (req, res) => {
  res.render("signup");
};

/**
 * @description get login method
 * @type GET
 * @url /api/users/login
 */
const login_get = (req, res) => {
  console.log("REQ", req.user);

  return res.status(200).json({ user: req.user });
};

/**
 * @description Renders signup page
 * @type POST
 * @url /api/users/signup
 */
const signup_post = async (req, res) => {
  try {
    const {
      email,
      password,
      mainrole,
      role,
      gender,
      title,
      position,
      firstName,
      lastName,
      phoneNumber,
      street,
      No,
      postalCode,
      country,

      companyName,
      legalForm,
      UID,
      website,
    } = req.body;

    //create owner and save to mongodb
    if (role === "owner") {
      const owner = await sownerSchema.create({
        email,
        password,
        mainrole,
        role,
        gender,
        title,
        firstName,
        lastName,
        phoneNumber,
        street,
        No,
        postalCode,
        country,
        verificationCode: randomBytes(20).toString("hex"),
      });
      createProfile(owner);

      let html = `
    <h1>Hello,</h1>
    <p>Please click the following link to verify your account</p>
    <a href = "http://localhost:${process.env.APP_PORT}/api/users/verify/${owner.verificationCode}">Verify Now</a>
    `;
      await sendVerification(
        owner.email,
        "Verify your account",
        "Please verify your account",
        html
      );
    }
    //create company investor and save to mongodb
    else if (role === "company") {
      const investorCompany = await icompanySchema.create({
        email,
        password,
        title,
        mainrole,
        role,
        gender,
        companyName,
        legalForm,
        UID,
        website,
        firstName,
        lastName,
        phoneNumber,
        street,
        No,
        position,
        postalCode,
        country,
        verificationCode: randomBytes(20).toString("hex"),
      });
      createProfile(investorCompany);
      let html = `
    <h1>Hello,</h1>
    <p>Please click the following link to verify your account</p>
    <a href = "http://localhost:${process.env.APP_PORT}/api/users/verify/${investorCompany.verificationCode}">Verify Now</a>
    `;
      await sendVerification(
        investorCompany.email,
        "Verify your account",
        "Please verify your account",
        html
      );
    }
    //create private investor and save to mongodb
    else if (role === "private") {
      const investorPrivate = await iprivateSchema.create({
        email,
        password,
        mainrole,
        role,
        gender,
        title,
        firstName,
        lastName,
        phoneNumber,
        street,
        No,
        postalCode,
        country,
        verificationCode: randomBytes(20).toString("hex"),
      });
      createProfile(investorPrivate);
      let html = `
    <h1>Hello,</h1>
    <p>Please click the following link to verify your account</p>
    <a href = "http://localhost:${process.env.APP_PORT}/api/users/verify/${investorPrivate.verificationCode}">Verify Now</a>
    `;
      await sendVerification(
        investorPrivate.email,
        "Verify your account",
        "Please verify your account",
        html
      );
    }

    //create broker and save to mongodb
    else if (role === "broker") {
      const broker = await sbrokerSchema.create({
        email,
        password,
        mainrole,
        role,
        gender,
        title,
        position,
        firstName,
        lastName,
        phoneNumber,
        street,
        No,
        postalCode,
        country,
        companyName,
        legalForm,
        UID,
        website,
        verificationCode: randomBytes(20).toString("hex"),
      });
      createProfile(broker);
      let html = `
    <h1>Hello,</h1>
    <p>Please click the following link to verify your account</p>
    <a href = "http://localhost:${process.env.APP_PORT}/api/users/verify/${broker.verificationCode}">Verify Now</a>
    `;
      await sendVerification(
        broker.email,
        "Verify your account",
        "Please verify your account",
        html
      );
    } else {
      return res
        .status(500)
        .json({ success: false, message: "server failed on creating account" });
    }

    return res.status(200).json({
      success: true,
      message: "Signup was successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "signup wasn't successful",
    });
  }
};

/**
 * @description verify user
 * @type GET
 * @url /api/users/verify/:verificationCode
 */
const verify_now = async (req, res) => {
  try {
    const { verificationCode } = req.params;

    const user = await baseSchema.findOne({ verificationCode });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Password reset token invalid or has expired",
      });
    }
    user.verified = true;
    user.verificationCode = undefined;
    await user.save();
    return res.status(200).json("successful");
  } catch (err) {
    console.log(err);
    return res.status(400).render("error");
  }
};

/**
 * @description Reset password init
 * @type PUT
 * @url /api/users/resetpassword
 */

//Initiating reset password

const resetPasswordInit = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await baseSchema
      .findOne({ email: email }, function (err, base) {
        if (!base) {
          console.log(err);
        }
        return base;
      })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User with this email does not exist",
      });
    }
    user.generatePasswordReset();
    await user.save();

    // Send password reset link to email
    let html = `
    <h1>Hello,/h1>
    <p>Please click the following link to reset your password</p>
    <a href = "http://localhost:${process.env.APP_PORT}/api/users/resetpassword/${user.resetPasswordToken}">Reset your password</a>`;
    sendVerification(
      user.email,
      "Reset your password",
      "Please reset your password here",
      html
    );
    return res.status(200).render({
      success: true,
      message: "Password link is sent to your email",
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Unauthorized access. Invalid reset code",
    });
  }
};

/**
 * @description Reset password
 * @type GET
 * @url /api/users/resetpassword/:resetPasswordToken
 */
const resetPassword = async (req, res) => {
  try {
    const { resetPasswordToken } = req.params;

    const user = await baseSchema
      .findOne(
        {
          resetPasswordToken: resetPasswordToken,
          resetPasswordExpiresIn: { $gt: Date.now() },
        },
        function (err, base) {
          if (!base) {
            console.log(err);
          }
          return base;
        }
      )
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Password reset token invalid or has expired",
      });
    }
    return res.render("password-reset");
  } catch (error) {
    console.log(err);
    return res.status(400).render("error");
  }
};

/**
 * @description Reset password post method
 * @type Post
 * @url /api/users/resetpassword
 */
const resetPasswordPost = async (req, res) => {
  try {
    const { resetPasswordToken, password, confirmPassword } = req.body;
    const user = await baseSchema
      .findOne(
        { resetPasswordToken: resetPasswordToken },
        function (err, base) {
          if (!base) {
            console.log(err);
          }
          return base;
        }
      )
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Password reset token invalid or has expired",
      });
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresIn = undefined;
    await user.save();

    //Send confirmation email to user that the password has been changed

    let html = `
    <h1>Hello,</h1>
    <p>Your password has been changed, if it wasn't done by you please contact our support</p>`;
    sendVerification(
      user.email,
      "Reseting password was done successfully",
      "Your password was changed",
      html
    );
    res.status(200).json({
      success: true,
      message: "Your password has been reseted you can log in now",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Failed something went wrong with changing your password",
    });
  }
};

/**
 * @description log in user
 * @type POST
 * @url /api/users/login
 */

const login_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await baseSchema.findOne({ email: email });

    if (!(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Email or password is not correct",
      });
    } else if (user.verified !== true) {
      return res.status(401).json({
        success: false,
        message: "Email is not verifed, please verify ur email",
      });
    }

    let token = await user.generateJWT();
    return res.status(200).json({
      success: true,
      user: user.getUserInfo(),
      token: `Bearer ${token}`,
      message: "Token has been created",
    });
    // return res
    //   .status(200)
    //   .json({ success: true, message: "Successfully logged in" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Failed something went wrong with logging in",
    });
  }
};

/**
 * @description Edit user
 * @type PATCH
 * @url /api/users/dashboard/editUser/:id
 */

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await baseSchema.findById(req.params.id);
    Object.assign(user, req.body);
    user.save();
    res.status(200).json({ success: true, message: "User edited", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error on editing user" });
  }
};

/**
 * @description Delete user
 * @type DELETE
 * @url /api/users/dashboard/deleteuser/:id
 */
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await baseSchema.deleteOne({ _id: id });
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "error on deleting user" });
  }
};

/**
 * @description gets only one user
 * @type GET
 * @url /api/users/dashboard/getOne/:id
 */

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await baseSchema
      .findOne({ _id: id }, function (err, base) {
        console.log(base);
      })
      .clone()
      .catch(function (err) {
        console.log(err);
      });
    res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    res.status(401).json({ success: false, message: "Failed to get user" });
  }
};

/**
 * @description gets all user
 * @type GET
 * @url /api/users/dashboard/getAll
 */
const getAll = async (req, res) => {
  const userat = await baseSchema
    .find({}, function (err, users) {
      if (!userat) {
        res.json("ska usera");
      }
      res.json({ userat });
    })
    .clone()
    .catch(function (err) {
      console.log(err);
    });
};

const logout = (req, res) => {
  console.log("you have been logged out");
  res.status(200).redirect("/login");
};

module.exports = {
  resetPassword,
  resetPasswordPost,
  resetPasswordInit,
  verify_now,
  editUser,
  deleteUser,
  getOne,
  getAll,
  signup_post,
  signup_get,
  login_get,
  login_post,
  logout,
};
