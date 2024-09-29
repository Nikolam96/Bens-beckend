const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("./handlers/productHandler");
const cookie = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

const { init } = require("./pkg/db/index");
init();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.get("/api/v1/products", getProducts);
app.get("/api/v1/product/:id", getProduct);
app.post("/api/v1/create-product", createProduct);
app.patch("/api/v1/update-product/:id", updateProduct);
app.delete("/api/v1/delete-product/:id", deleteProduct);

app.listen(+process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);
  console.log("Server is ON");
});
