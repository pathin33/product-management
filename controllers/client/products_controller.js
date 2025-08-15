const Product = require("../../models/products_model");
module.exports.index = async (req, res) => {
    const product = await Product.find({
        status: 'active',
        deleted: false
    });
    product.forEach((item) => {
        item.newprice = (item.price * (100 - item.discountPercentage) / 100).toFixed(0);

    });
    console.log(product);

    res.render("./client/pages/products/index", {
        title: "Trang Sản Phẩm",
        products: product
    });
};