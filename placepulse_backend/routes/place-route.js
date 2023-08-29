const express = require("express");
const { check } = require("express-validator");

const {
  createPlace,
  getPlaceById,
  getPlacesByUserId,
  deletePlace,
  updatePlace,
} = require("../controllers/place-controller");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();
router.use(checkAuth);

router.get("/user/:uid", getPlacesByUserId);
router.get("/:pid", getPlaceById);

router.delete("/:pid", deletePlace);
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
router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlace
);
module.exports = router;
