import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/users";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Fetch Users
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Add User
  const addUser = () => {
    axios.post(API_URL, newUser)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error("Error adding user:", error));
  };

  // Update User
  const updateUser = (id) => {
    axios.put(`${API_URL}/${id}`, { name: "Updated Name", email: "updated@example.com" })
      .then(response => setUsers(users.map(user => user.id === id ? response.data : user)))
      .catch(error => console.error("Error updating user:", error));
  };

  // Patch User
  const patchUser = (id) => {
    axios.patch(`${API_URL}/${id}`, { email: "patched@example.com" })
      .then(response => setUsers(users.map(user => user.id === id ? response.data : user)))
      .catch(error => console.error("Error patching user:", error));
  };

  // Delete User
  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h2>User List</h2>
      <center>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>
                <button onClick={() => patchUser(user.id)}>Patch</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>

      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default UserTable;