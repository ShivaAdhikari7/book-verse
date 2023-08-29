const fs = require("fs");
const path = require("path");

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
// const cors = require("cors");
const HttpError = require("./models/http-error");
require("./database/connection");

app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", require("./routes/users-routes"));
app.use("/api/places", require("./routes/place-route"));

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
