const dashboardRouter = require("./dashboard_routes");
const productRouter = require("./products_routes");
const systemConfig = require("../../config/system");
//file router tổng
module.exports = (app) => {
    app.use(`${systemConfig.prefixAdmin}/dashboard`, dashboardRouter);
    app.use(`${systemConfig.prefixAdmin}/products`, productRouter);
}