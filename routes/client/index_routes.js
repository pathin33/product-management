const productsRouter = require("./products_routes");
const homeRouter = require("./home_routes");
//file router tổng
module.exports = (app) => {
    app.use("/", homeRouter);
    app.use("/products", productsRouter);
}