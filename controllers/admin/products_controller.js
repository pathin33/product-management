const Product = require("../../models/products_model");
module.exports.products = async (req, res) => {
    //in sản phẩm
    const btnStatus = [
        {
            class: "",
            btnst: "Tất cả",
            highlight: ""
        },
        {
            class: "active",
            btnst: "Hoạt động",
            highlight: ""

        },
        {
            class: "inactive",
            btnst: "Dừng hoạt động",
            highlight: ""
        }
    ];
    if (req.query.status) {
        const index = btnStatus.findIndex((item) => {
            return item.class == req.query.status;
        });
        btnStatus[index].highlight = "active";
    }
    else {
        btnStatus[0].highlight = "active";
    }


    const filter = {
        deleted: false,
    };
    if (req.query.status) {
        filter.status = req.query.status;
    }
    //end in sản phẩm

    //tìm kiếm tên sản phẩm
    if (req.query.keyword) {
        filter.title = { $regex: req.query.keyword }
    }
    //end tìm kiếm tên sản phẩm

    const products = await Product.find(filter);

    res.render("./admin/pages/products/index.pug", {
        Title: "Sản Phẩm",
        products: products,
        buttonStatus: btnStatus
    });
}