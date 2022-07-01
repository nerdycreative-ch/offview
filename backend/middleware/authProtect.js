const checkRole = (mainrole, role) => {
  return (req, res, next) => {
    if (req.user.mainrole !== mainrole && req.user.role !== role) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }
    next();
  };
};

module.exports = checkRole;
