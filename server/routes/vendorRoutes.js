import express from "express";
import { createVendor, deleteVendor, getAllVendors, getOneVendor, updateVendor } from "../controller/vendorController.js";

const router = express.Router();

// Create Vendor
router.post("/create", createVendor);

// Get All Vendors
router.get("/getall", getAllVendors);

// Get Single Vendor by ID
router.get("/getone/:id", getOneVendor);

// Update Vendor by ID
router.put("/update/:id", updateVendor);

// Delete Vendor by ID
router.delete("/delete/:id", deleteVendor);

export default router;
