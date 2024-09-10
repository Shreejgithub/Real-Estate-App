// vendorModel.js
import mongoose from "mongoose";

// Create Vendor Schema
const vendorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

// Export Vendor model
export default mongoose.model("Vendor", vendorSchema);
