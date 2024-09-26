import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    cover: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true, enum: ["For Rent", "For Sale"] },
    price: { type: String, required: true }, // You can use Number if you want to store the price as a number
    type: { type: String, required: true },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
