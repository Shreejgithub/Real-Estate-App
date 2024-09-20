// adminRoutes.js

import express from "express";
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  authenticateAdmin,
} from "../controller/adminController.js";

const router = express.Router();

// Route to create a new admin
router.post("/create", createAdmin);

// Route to get all admins
router.get("/getall", getAllAdmins);

// Route to get admin by ID
router.get("/getone/:id", getAdminById);

// Route to update admin by ID
router.put("/update/:id", updateAdmin);

// Route to delete admin by ID
router.delete("/delete/:id", deleteAdmin);

// Route to authenticate an admin
router.post("/authenticate/:id", authenticateAdmin);


export default router;
