// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ViewDetailAdmin = () => {
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch admin data
//   useEffect(() => {
//     const fetchAdmins = async () => {
//       try {
//         const response = await fetch('http://localhost:8001/api/admins/getall');
//         if (!response.ok) {
//           throw new Error('Failed to fetch admin details');
//         }
//         const data = await response.json();
//         setAdmins(data); // Assuming the response is an array of admins
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchAdmins();
//   }, []);

//   // Handle Accept
//   const handleAccept = (adminId) => {
//     console.log(`Accepted admin with ID: ${adminId}`);
//     // Here, you can call the backend API to accept the admin
//   };

//   // Handle Reject
//   const handleReject = (adminId) => {
//     console.log(`Rejected admin with ID: ${adminId}`);
//     // Here, you can call the backend API to reject the admin
//   };

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <div className="spinner-border" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//         <p>Loading admin details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-center">Admin Details</h2>
//       <table className="table table-bordered table-hover">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Address</th>
//             <th scope="col">Property Type</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin._id}>
//               <td>{admin.name}</td>
//               <td>{admin.email}</td>
//               <td>{admin.address}</td>
//               <td>{admin.propertyType}</td>
//               <td>
//                 <button
//                   className="btn btn-success btn-sm mr-2"
//                   onClick={() => handleAccept(admin._id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleReject(admin._id)}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewDetailAdmin;


// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const ViewDetailAdmin = () => {
//   const [adminData, setAdminData] = useState(null);
//   const [error, setError] = useState('');
//   const history = useHistory(); // Initialize useHistory hook

//   // Fetch data on component load
//   useEffect(() => {
//     const fetchAdminData = async () => {
//       try {
//         const response = await fetch('http://localhost:8001/api/admins/getall');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setAdminData(data); // Store fetched data
//       } catch (err) {
//         setError('Error fetching admin data');
//       }
//     };

//     fetchAdminData();
//   }, []);

//   // Handle Accept button click
//   const handleAccept = async (adminId) => {
//     try {
//       // Authenticate the vendor (replace with actual authentication API if available)
//       const response = await fetch(`http://localhost:8001/api/admins/authenticate/${adminId}`, {
//         method: 'POST',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to authenticate vendor');
//       }

//       // On success, redirect to the /filldetails page
//       history.push('/filldetails');
//     } catch (err) {
//       setError('Failed to authenticate vendor');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Vendor Details</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {adminData ? (
//         adminData.map((admin) => (
//           <div key={admin._id} className="card mb-3">
//             <div className="card-body">
//               <h5 className="card-title">{admin.name}</h5>
//               <p className="card-text">Email: {admin.email}</p>
//               <p className="card-text">Address: {admin.address}</p>
//               <p className="card-text">Property Type: {admin.propertyType}</p>
//               <button
//                 className="btn btn-success mr-2"
//                 onClick={() => handleAccept(admin._id)}
//               >
//                 Accept
//               </button>
//               <button className="btn btn-danger">Reject</button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading vendor details...</p>
//       )}
//     </div>
//   );
// };

// export default ViewDetailAdmin;
// ViewDetailAdmin.jsx

import React, { useState, useEffect } from 'react';

const ViewDetailAdmin = () => {
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/admins/getall');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAdminData(data);
      } catch (err) {
        setError('Error fetching admin data');
      }
    };

    fetchAdminData();
  }, []);

  // Handle Accept (Authenticate Admin)
// Handle Accept button click in ViewDetailAdmin.jsx
const handleAccept = async (adminId) => {
  try {
    // Update the vendor status to "accepted"
    const response = await fetch(`http://localhost:8001/api/admins/update/${adminId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'accepted' }),
    });

    if (!response.ok) {
      throw new Error('Failed to accept vendor');
    }

    // Optionally, you can redirect or show a success message
    setAdminData(adminData.map(admin => 
      admin._id === adminId ? { ...admin, status: 'accepted' } : admin
    ));
  } catch (err) {
    setError('Failed to accept vendor');
  }
};


  return (
    <div className="container mt-4">
      <h2>Vendor Details</h2>
      {error && <p className="text-danger">{error}</p>}
      {adminData ? (
        adminData.map((admin) => (
          <div key={admin._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{admin.name}</h5>
              <p className="card-text">Email: {admin.email}</p>
              <p className="card-text">Address: {admin.address}</p>
              <p className="card-text">Property Type: {admin.propertyType}</p>
              <p className="card-text">Authenticated: {admin.isAuthenticated ? 'Yes' : 'No'}</p>
              <button
                className="btn btn-success mr-2"
                onClick={() => handleAccept(admin._id)}
                disabled={admin.isAuthenticated} // Disable button if already authenticated
              >
                Accept
              </button>
              <button className="btn btn-danger">Reject</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading vendor details...</p>
      )}
    </div>
  );
};

export default ViewDetailAdmin;
