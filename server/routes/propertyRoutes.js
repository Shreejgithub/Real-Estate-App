import express from 'express';
import { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty } from '../controller/propertyController.js';

const router = express.Router();

// Define routes
router.post('/create', createProperty);  // Create a property
router.get('/get', getProperties);     // Get all properties
router.get('/:id', getPropertyById); // Get property by ID
router.put('/:id', updateProperty); // Update property
router.delete('/:id', deleteProperty); // Delete property

export default router;
