const { loginAdmin } = require("../controllers/adminController");
const authAdmin = require("../middleware/authAdmin");

const adminRouter = require("express").Router()

adminRouter.post("/admin/login", loginAdmin);

module.exports = adminRouter;