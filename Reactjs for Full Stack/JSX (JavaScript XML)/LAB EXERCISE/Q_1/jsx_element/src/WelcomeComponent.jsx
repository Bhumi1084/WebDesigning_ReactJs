import React from "react";

function WelcomeComponent() {
  // Dynamic data
  const explanation = "JSX allows us to write HTML-like syntax in JavaScript, making UI creation more intuitive.";

  return (
    <div>
      {/* Heading */}
      <h1>Welcome to JSX</h1>
      
      {/* Paragraph with dynamic data */}
      <p>{explanation}</p>
    </div>
  );
}

export default WelcomeComponent;