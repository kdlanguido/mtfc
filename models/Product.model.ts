import mongoose from "mongoose";

const schema = {
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  ratingScore: { type: Number, required: false },
  imgUrl: { type: String, required: true },
};

const Product = mongoose.models.Product || mongoose.model("Product", new mongoose.Schema(schema));

export default Product;
