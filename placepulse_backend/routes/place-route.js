const express = require("express");
const { check } = require("express-validator");

const {
  createPlace,
  getPlaceById,
  getPlacesByUserId,
  deletePlace,
} = require("../controllers/place-controller");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();
router.use(checkAuth);
router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);
module.exports = router;
