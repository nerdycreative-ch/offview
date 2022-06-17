const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const bodyparser = require("body-parser");
require(`dotenv`).config();

//routes
const authRoutes = require("./routes/authRoutes");
const advertisementRoutes = require("./routes/advertisementRoutes");
const profileRoutes = require("./routes/profileRoutes");
const privacyPolicyroutes = require("./routes/privacyPolicyRoutes");
const imprintRoutes = require("./routes/imprintRoutes");
const contactRoutes = require("./routes/contactRoutes");
const socialmediaRoutes = require("./routes/socialmediaRoutes");
const faqRoutes = require("./routes/faqRoutes");
const searchRoutes = require("./routes/searchProfileRoutes");
const offerRoutes = require("./routes/offerRoutes");

//cors
app.use(cors());

//import passport middleware
require("./middleware/passport");

//application middlewares

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//view-engine
app.set("view engine", "ejs");

//database connect
mongoose
  .connect(process.env.APP_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.APP_PORT);
    console.log(`You are connected to mongoDB!`);
    console.log(`You are listening in port ${process.env.APP_PORT}.`);
  })
  .catch((err) => console.log(err));

//routes

app.use("/users", authRoutes);
app.use("/advertisements", advertisementRoutes);
app.use("/profiles", profileRoutes);
app.use("/privacypolicy", privacyPolicyroutes);
app.use("/imprint", imprintRoutes);
app.use("/contact", contactRoutes);
app.use("/socialmedia", socialmediaRoutes);
app.use("/faq", faqRoutes);
app.use("/searchprofiles", searchRoutes);
app.use("/offers", offerRoutes);
