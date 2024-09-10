import Vendor from "../model/vendorModel.js";

// CREATE Vendor
export const createVendor = async (req, res) => {
    try {
        const vendorData = new Vendor(req.body);

        if (!vendorData) {
            return res.status(404).json({ msg: "Vendor data not found" });
        }

        const savedVendor = await vendorData.save();
        res.status(200).json(savedVendor);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET All Vendors
export const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();

        if (!vendors) {
            return res.status(404).json({ msg: "Vendors Not Found" });
        }

        res.status(200).json(vendors);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET Single Vendor by ID
export const getOneVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendor = await Vendor.findById(id);

        if (!vendor) {
            return res.status(404).json({ msg: "Vendor not found" });
        }

        res.status(200).json(vendor);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE Vendor by ID
export const updateVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendor = await Vendor.findById(id);

        if (!vendor) {
            return res.status(404).json({ msg: "Vendor not found" });
        }

        const updatedVendor = await Vendor.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Vendor updated successfully", updatedVendor });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE Vendor by ID
export const deleteVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendor = await Vendor.findById(id);

        if (!vendor) {
            return res.status(404).json({ msg: "Vendor not found" });
        }

        await Vendor.findByIdAndDelete(id);
        res.status(200).json({ msg: "Vendor deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
