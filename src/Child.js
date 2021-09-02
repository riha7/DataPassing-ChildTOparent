import React from 'react';
export default function Child(props) {
  return (
    <div>
      <h1>Im child</h1>
      <h2>update : {props.count}</h2>
      <button onClick={props.update}>clickTo Update</button>
    </div>
  );
}
