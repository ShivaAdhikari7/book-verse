const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("BookVerse-backend on Progress");
  res.json({ message: "BookVerse-backend on Progress" });
});

module.exports = router;
