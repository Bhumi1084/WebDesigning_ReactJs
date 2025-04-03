import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ padding: "10px 20px", margin: "10px", fontSize: "16px" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ padding: "10px 20px", margin: "10px", fontSize: "16px" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
