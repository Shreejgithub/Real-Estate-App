// adminModel.js

import mongoose from "mongoose";

// Admin Schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ['residential', 'commercial', 'industrial'],
    required: true,
  },  
  isAuthenticated: {
    type: Boolean,
    default: false, // Initially set to false
  },  
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
}, { timestamps: true });  // Automatically create createdAt and updatedAt fields

export default mongoose.model("Admin", adminSchema);
