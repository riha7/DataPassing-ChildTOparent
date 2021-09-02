import React, { useState } from 'react';
import './style.css';
import Child from './Child';
export default function App() {
  const [count, setcount] = useState(0);
  //create callback function.inside function update count value
  const handleChild = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>child to parent data: {count}</h1>
      <Child update={handleChild} count={count} />
    </div>
  );
}
