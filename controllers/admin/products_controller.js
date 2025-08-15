const Product = require("../../models/products_model");
module.exports.products = async (req, res) => {
    const products = await Product.find({});
    res.render("./admin/pages/products/index.pug", {
        Title: "Sản Phẩm",
        products: products
    });
}