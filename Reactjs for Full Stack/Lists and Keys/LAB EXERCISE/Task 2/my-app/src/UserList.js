import React from "react";

const UserList = () => {
    // Array of users with unique IDs
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Diana" },
    ];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>User List</h2>
            <ul style={listStyle}>
                {users.map((user) => (
                    <li key={user.id} style={itemStyle}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Styles for the list
const listStyle = {
    listStyleType: "none",
    padding: 0,
};

const itemStyle = {
    fontSize: "18px",
    padding: "5px",
    color: "#333",
};

export default UserList;
