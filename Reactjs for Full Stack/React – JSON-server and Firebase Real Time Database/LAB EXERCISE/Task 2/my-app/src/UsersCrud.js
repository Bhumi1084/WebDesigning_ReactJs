import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

function UsersCrud() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const usersCollectionRef = collection(db, "users");

  // Fetch users
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  // Add user
  const addUser = async () => {
    await addDoc(usersCollectionRef, newUser);
    window.location.reload();
  };

  // Update user
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { name: "Updated Name" });
    window.location.reload();
  };

  // Delete user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

  return (
    <div>
      <h2>Users List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default UsersCrud;
