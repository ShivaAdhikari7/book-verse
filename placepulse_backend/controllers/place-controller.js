const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Place = require("../models/place-model");
const User = require("../models/user-model");

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, address, coordinates } = req.body;
  console.log(coordinates);
  const createdPlace = Place.create({
    title,
    description,
    address,
    location: { lat: 27.6966484, lng: 83.7252384 },
    image: req.file.path,
    creator: req.userData.userId,
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      "Creating place failed , please try again.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    console.log("Hello world");
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating place failed here, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};
const getPlaceById = () => {};
const getPlacesByUserId = () => {};
const deletePlace = () => {};

module.exports = {
  createPlace,
  getPlaceById,
  getPlacesByUserId,
  deletePlace,
};
