import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
