const express = require("express");
const bodyParser = require("body-parser");

const bookRoutes = require("./routes/book-routes");
const app = express();

app.use(bookRoutes);

app.listen(5000);
