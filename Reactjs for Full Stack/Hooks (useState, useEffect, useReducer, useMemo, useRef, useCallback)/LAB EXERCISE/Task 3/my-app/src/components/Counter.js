import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return(
    <div className="flex flex-col items-center p-4">
        <h1 className="text-xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex space-x-4">            
            <button onClick={()=>dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Increment</button>
            <button onClick={()=>dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">Decrement</button>
            <button onClick={()=>dispatch(reset())} className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600">Reset</button>
        </div>
    </div>    
  );
};
export default Counter;