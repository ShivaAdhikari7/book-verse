const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");

require("./database/connection");
app.use(express.json());
app.use(cors());

app.use("api/places", require("./routes/place-route"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
