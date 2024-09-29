const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      minLength: 4,
      maxLength: 50,
      required: [true, "Please enter product name"],
    },
    product_company: {
      type: String,
      minLength: 4,
      maxLength: 50,
      required: [true, "Please enter product company"],
    },
    description: {
      type: String,
      minLength: 4,
      maxLength: 50,
      required: [true, "Please enter description"],
    },
    logo: {
      type: String,
      default: "../assets/img/bens-logo.png",
    },
    languages: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
