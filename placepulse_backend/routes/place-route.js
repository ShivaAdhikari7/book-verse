const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Placepulse-backend on Progress");
  res.json({ message: "placepulse-backend on Progress" });
});

module.exports = router;
