import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcceptReq = () => {
  const [acceptedVendors, setAcceptedVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcceptedVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/vendors/getall');
        const accepted = response.data.filter(vendor => vendor.status === 'accepted');
        setAcceptedVendors(accepted);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchAcceptedVendors();
  }, []);

  return (
    <div className="container mt-5">
      <h3>Accepted Vendor Requests</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {acceptedVendors.map((vendor) => (
              <tr key={vendor._id}>
                <td>{vendor.fname} {vendor.lname}</td>
                <td>{vendor.email}</td>
                <td>
                  {/* You can add more actions if needed */}
                  <button className="btn btn-primary btn-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AcceptReq;
