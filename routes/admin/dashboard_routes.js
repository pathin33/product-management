const express = require("express");
const dashboard_controller = require("../../controllers/admin/dashboard_controller");
const router = express.Router();

router.get("/", dashboard_controller.dashboard);

module.exports = router;