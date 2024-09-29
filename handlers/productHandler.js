const Product = require("../pkg/Product/productSchema");

exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body.form);
    res.status(201).json({
      status: "created",
      data: product,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  console.log(req.body.form);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body.form,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Deleted",
      deletedProduct,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
