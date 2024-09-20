import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { HiViewfinderCircle } from "react-icons/hi2";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import axios from "axios";
import Header2 from "./Header2";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/vendors/getall"
        );
        setVendors(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to delete a vendor
  const deleteVendor = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/vendors/delete/${id}`);
      setVendors(vendors.filter((vendor) => vendor._id !== id));
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  // Function to handle the view details action
  const viewVendorDetails = (id) => {
    history.push(`/viewdetailadmin/${id}`); // Redirect to /viewdetailadmin with the vendor ID
  };

  return (
    <>
      <Header2 />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="card-title">Vendor Management</h3>

            <div className="links-group">
              <button
                className="btn btn-link"
                onClick={() => history.push("/accepted-requests")} // Navigate to the Accepted Requests page
              >
                Accepted Requests
              </button>
              <button
                className="btn btn-link"
                onClick={() => history.push("/rejected-requests")}
              >
                Rejected Requests
              </button>
              <button
                className="btn btn-primary"
                onClick={() => history.push("/viewdetailadmin")}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="card-body">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Sr. No.</th>
                    <th>Vendor Name</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={vendor._id}>
                      <td>{index + 1}</td>
                      <td>
                        {vendor.fname} {vendor.lname}
                      </td>
                      <td>{vendor.email}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm icon-btn"
                          onClick={() => viewVendorDetails(vendor._id)} // Call the view details function
                          title="View Detail"
                        >
                          <HiViewfinderCircle />
                        </button>
                        <button
                          className="btn btn-danger btn-sm icon-btn"
                          onClick={() => deleteVendor(vendor._id)}
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorList;

// import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import axios from 'axios';
// import Header2 from './Header2';
// import { HiViewfinderCircle } from 'react-icons/hi2';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

// const VendorList = () => {
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const history = useHistory(); // Initialize useHistory for navigation

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch all vendors from your API
//         const response = await axios.get('http://localhost:8001/api/vendors/getall');
//         setVendors(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Function to delete a vendor
//   const deleteVendor = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8001/api/vendors/delete/${id}`);
//       setVendors(vendors.filter(vendor => vendor._id !== id));
//     } catch (error) {
//       console.error("Error deleting vendor:", error);
//     }
//   };

//   // Function to update a vendor
//   const updateVendor = async (vendor) => {
//     try {
//       const updatedVendor = { ...vendor, fname: "UpdatedVendorFirstName", lname: "UpdatedVendorLastName" }; // Example update data
//       await axios.put(`http://localhost:8001/api/updatevendor/${vendor._id}`, updatedVendor);
//       setVendors(vendors.map(v => v._id === vendor._id ? updatedVendor : v));
//     } catch (error) {
//       console.error("Error updating vendor:", error);
//     }
//   };

//   // Function to handle view details (redirect)
//   const viewDetail = (id) => {
//     history.push(`/viewdetailadmin/${id}`); // Redirect to the detail page with the vendor's ID
//   };

//   return (
//     <>
//       <Header2 />
//       <div className="container mt-5">
//         <div className="card">
//           <div className="card-header d-flex justify-content-between align-items-center">
//             <h3 className="card-title">Vendor Management</h3>
//           </div>
//           <div className="card-body">
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <table className="table table-bordered table-hover">
//                 <thead>
//                   <tr>
//                     <th style={{ textAlign: 'left' }}>Sr. No.</th>
//                     <th>Vendor Name</th>
//                     <th>Email Id</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {vendors.map((vendor, index) => (
//                     <tr key={vendor._id}>
//                       <td>{index + 1}</td>
//                       <td>{vendor.fname} {vendor.lname}</td>
//                       <td>{vendor.email}</td>
//                       <td>
//                         <button
//                           className="btn btn-success btn-sm icon-btn"
//                           onClick={() => viewDetail(vendor._id)}  // Redirect on click
//                           title="View Detail"
//                         >
//                           <HiViewfinderCircle />
//                         </button>
//                         <button
//                           className="btn btn-danger btn-sm icon-btn"
//                           onClick={() => deleteVendor(vendor._id)}
//                           title="Delete"
//                         >
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VendorList;
