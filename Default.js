import { products } from "./contents/Product.js";
import Product from "./model/ProductSchema.js";
const DefaultData = async() => {
  try {
    await Product.insertMany(products);
    console.log("Data Imported SuccessFully");
  } catch (error) {
    console.log("Error while inserting data", error.message);
  }
};

export default DefaultData;
