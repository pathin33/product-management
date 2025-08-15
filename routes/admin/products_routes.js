const express = require("express");
const router = express.Router();
const productController = require("../../controllers/admin/products_controller");

router.get("/", productController.products);
module.exports = router;