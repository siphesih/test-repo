import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the list of admins from the backend
  axios.get('http://localhost:3000/admins')
      .then(response => {
        setAdmins(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the admin list!', error);
      });
  }, []);

  const handleEditClick = (admin) => {
    setSelectedAdmin(admin);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedAdmin({
      ...selectedAdmin,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/admins/${selectedAdmin.id}`, selectedAdmin)
      .then(response => {
        setAdmins(admins.map(admin => (admin.id === selectedAdmin.id ? response.data : admin)));
        setShowModal(false);
      })
      .catch(error => {
        console.error('There was an error updating the admin details!', error);
      });
  };

  return (
    
    <div>
      <main className='main-container col-md-8 mx-md-auto'>
        <div className="container my-5" style={{ backgroundColor: 'white' }}>
          <div className="card-body text-center mt-5">
            <h4 className="card-title text-dark">List of Active Admins</h4>
            <p className="card-text text-dark">Here is the list of all active admins in the system.</p>
          </div>
          <div className="card mt-5 bg-white">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <th scope="row">{admin.id}</th>
                    <td>{admin.email}</td>
                    <td>{admin.name}</td>
                    <td>{admin.role}</td>
                    <td>{admin.phoneNumber}</td>
                    <td>{admin.address}</td>
                    <td>{admin.lastName}</td>
                    <td>
                      <button className="btn btn-sm btn-warning" onClick={() => handleEditClick(admin)}><i className="fas fa-edit"></i> Edit</button>
                    </td>
                    <td>
                      <a className="btn btn-sm btn-info" href="#"><i className="fas fa-info-circle"></i> Details</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Editing Admin Info */}
          {showModal && selectedAdmin && (
            <div className="modal fade show d-block" role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="card-body text-center">
                    <h4 className="card-title">Edit Admin Details</h4>
                    <p className="card-text">Modify the admin details as needed.</p>
                  </div>
                  <div className="card col-8 offset-2 my-2 p-3">
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label htmlFor="adminEmail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="adminEmail"
                          value={selectedAdmin.email}
                          onChange={handleInputChange}
                          placeholder="Enter new email address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adminName">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="adminName"
                          value={selectedAdmin.name}
                          onChange={handleInputChange}
                          placeholder="Enter name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adminRole">Role</label>
                        <input
                          type="text"
                          className="form-control"
                          name="role"
                          id="adminRole"
                          value={selectedAdmin.role}
                          onChange={handleInputChange}
                          placeholder="Enter role"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adminPhoneNumber">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          id="adminPhoneNumber"
                          value={selectedAdmin.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adminAddress">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="adminAddress"
                          value={selectedAdmin.address}
                          onChange={handleInputChange}
                          placeholder="Enter address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adminLastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          id="adminLastName"
                          value={selectedAdmin.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-block btn-primary">Update Admin</button>
                        <button type="button" className="btn btn-secondary mt-2" onClick={() => setShowModal(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default About;
