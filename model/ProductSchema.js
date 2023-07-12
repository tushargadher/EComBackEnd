import mongoose from "mongoose";

const ProductSchem = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    require: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("product", ProductSchem);
export default Product;
