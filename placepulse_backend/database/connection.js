const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_URI}/placepulse_db`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
