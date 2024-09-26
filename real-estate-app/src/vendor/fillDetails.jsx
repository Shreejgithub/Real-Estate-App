import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FillDetails = () => {
  // State for each form input
  const [cover, setCover] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("For Sale");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a property object
    const newProperty = {
      cover,
      name,
      location,
      category,
      price,
      type,
    };

    try {
      // Send POST request to API
      const response = await axios.post(
        "http://localhost:8001/api/properties/create",
        newProperty
      );

      if (response.status === 200) {
        Swal.fire("Success!", "Property added successfully!", "success");
        // Reset form fields after successful submission
        setCover("");
        setName("");
        setLocation("");
        setCategory("For Sale");
        setPrice("");
        setType("");
      }
    } catch (error) {
      Swal.fire("Error", "Failed to add property", "error");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Property Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cover">Cover Image URL:</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Property Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Property Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default FillDetails;
