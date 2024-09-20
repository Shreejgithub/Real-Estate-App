// adminController.js

import Admin from "../model/adminModel.js";

// CREATE Admin
export const createAdmin = async (req, res) => {
  try {
    const adminData = new Admin(req.body);
    const savedAdmin = await adminData.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all Admins
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET Admin by ID
export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ msg: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE Admin by ID
export const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!admin) return res.status(404).json({ msg: "Admin not found" });
    res.status(200).json({ msg: "Admin updated successfully", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Admin by ID
export const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ msg: "Admin not found" });
    res.status(200).json({ msg: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Authenticate Admin (Accept admin)
export const authenticateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ msg: "Admin not found" });

    // Update the isAuthenticated field to true
    admin.isAuthenticated = true;
    await admin.save();

    res.status(200).json({ msg: "Admin authenticated successfully", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

