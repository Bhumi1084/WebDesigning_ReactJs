import React, { useState } from "react";

const EligibilityMessage = () => {
    // State to store user's age
    const [age, setAge] = useState("");

    // Handler to update age
    const handleAgeChange = (event) => {
        const value = event.target.value;
        setAge(value ? parseInt(value, 10) : "");
    };

    // Determine eligibility message
    const message =
        age >= 18
            ? "You are eligible to vote."
            : age !== "" // Avoid showing a message if the input is empty
            ? "You are not eligible to vote."
            : "Please enter your age.";

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Check Voting Eligibility</h2>
            <input
                type="number"
                value={age}
                onChange={handleAgeChange}
                placeholder="Enter your age"
                style={inputStyle}
            />
            <p style={messageStyle}>{message}</p>
        </div>
    );
};

const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
};

const messageStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
};

export default EligibilityMessage;
