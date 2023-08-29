const mongoose = require("mongoose");

// mongoose.connect(`${process.env.MONGO_URI}/placepulse_db`, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

const DB =
  "mongodb+srv://shivaadhikari499:p3EiYB3d0XLcjh9u@cluster0.9dt8rgh.mongodb.net/Place_pulse_db?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection established successfully");
  })
  .catch(() => {
    console.log("Sorry connection cannot be established");
  });
