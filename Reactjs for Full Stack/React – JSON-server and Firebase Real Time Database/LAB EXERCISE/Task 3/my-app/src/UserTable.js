import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

{loading && <ClipLoader color="blue" size={50} />}

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/users"; // Dummy API

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {/* Show Loading Spinner */}
      {loading && <p>Loading... 🔄</p>}

      {/* Show Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Table if No Errors and Not Loading */}
      {!loading && !error && (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
