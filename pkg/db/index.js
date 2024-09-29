const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../../.env` });

exports.init = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("DATABASE is ON");
  } catch (error) {
    console.log(error.message);
  }
};
