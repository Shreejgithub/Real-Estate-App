import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './Admin.css'; // For additional custom styles
import Header2 from './Header2';
import { HiViewfinderCircle } from 'react-icons/hi2';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/users/getall');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/users/delete/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to update a user
  const updateUser = async (user) => {
    try {
      const updatedUser = { ...user, fname: "UpdatedFirstName", lname: "UpdatedLastName" }; // Example update data
      await axios.put(`http://localhost:8000/api/users/update/${user._id}`, updatedUser);
      setUsers(users.map(u => u._id === user._id ? updatedUser : u));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <Header2 />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="card-title">User Management</h3>
          </div>
          <div className="card-body">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>Sr. No.</th>
                    <th>UserName</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.fname} {user.lname}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm icon-btn"
                          onClick={() => updateUser(user)}
                          title="Update"
                        >
                          <HiViewfinderCircle />
                        </button>
                        <button
                          className="btn btn-danger btn-sm icon-btn"
                          onClick={() => deleteUser(user._id)}
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

export default Admin;
