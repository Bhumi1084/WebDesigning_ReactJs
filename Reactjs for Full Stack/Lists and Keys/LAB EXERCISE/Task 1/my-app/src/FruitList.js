import React from "react";

const FruitList = () => {
    // Array of fruit names
    const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Fruit List</h2>
            <ul style={listStyle}>
                {fruits.map((fruit, index) => (
                    <li key={index} style={itemStyle}>
                        {fruit}
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

export default FruitList;
