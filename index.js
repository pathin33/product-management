const express = require('express');
const connectDB = require("./config/database");

require('dotenv').config();

connectDB.connect();
const app = express();

const routesClient = require("./routes/client/index_routes");
const routesAdmin = require("./routes/admin/index_routes");
const port = process.env.PORT;

//add  val local
const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
//Routes
routesClient(app);
routesAdmin(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});