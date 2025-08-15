const express = require('express');
const router = express.Router();
const productsController = require("../../controllers/client/products_controller");
router.get('/', productsController.index);
module.exports = router;