import React, { useState, useRef } from 'react';

const AvoidRerenders = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // Increment render count on every render
  renderCount.current += 1;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">Avoid Re-renders Example</h1>
      <p className="my-4">Count: {count}</p>
      <p className="text-gray-500">Render Count (tracked with useRef): {renderCount.current}</p>
      <button 
        onClick={increment} 
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
      >
        Increment Count
      </button>
    </div>
  );
};

export default AvoidRerenders;
