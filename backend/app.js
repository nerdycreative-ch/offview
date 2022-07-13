const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const bodyparser = require("body-parser");
const checkRole = require("./middleware/authProtect");
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
const locationRoutes = require("./routes/locationRoutes");
const rootRoutes = require("./routes/rootRoutes");
//cors
app.use(cors());

//import passport middleware
require("./middleware/passport");

//application middlewares

// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "./frontend/build")));
// app.use(express.static(path.join(__dirname, "public")));
// app.use('/_next', express.static(path.join(__dirname, './frontend/.next')))

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
// app.set("view engine", "ejs");

//database connect
mongoose
  .connect(process.env.APP_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.APP_PORT || 3000);
    console.log(`You are connected to mongoDB!`);
    console.log(`You are listening in port ${process.env.APP_PORT}.`);
  })
  .catch((err) => console.log(err));

//routes

app.use("/api/users", authRoutes);
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/privacypolicy", privacyPolicyroutes);
app.use("/api/imprint", imprintRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/socialmedia", socialmediaRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/searchprofiles", searchRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/root", rootRoutes);
