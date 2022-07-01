const router = require("express").Router();
const {
  getAdmin,
  getAllAdmins,
  createAdmin,
  deleteAdmin,
  editAdmin,
  createRoot,
} = require("../controller/rootController");
const authguard = require("../middleware/auth-guard");
const checkRole = require("../middleware/authProtect");

router.get(
  "/dashboard/get/:id",
  authguard,
  checkRole("root", "root"),
  getAdmin
);
router.get(
  "/dashboard/getall",
  authguard,
  checkRole("root", "root"),
  getAllAdmins
);
router.post(
  "/dashboard/create",
  authguard,
  checkRole("root", "root"),
  createAdmin
);

router.post("/dashboard/createroot", createRoot);

router.delete(
  "/dashboard/delete/:id",
  authguard,
  checkRole("root", "root"),
  deleteAdmin
);
router.patch(
  "/dashboard/patch/:id",
  authguard,
  checkRole("root", "root"),
  editAdmin
);

module.exports = router;
