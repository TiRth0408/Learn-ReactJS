import { useState } from "react";
import React from "react";
const ProfileFC = (props) => {
  const { name, city, email } = props;
  const [count, setCount] = React.useState(0);
  return (
    <div
      style={{
        "border": "1px solid black",
        padding: "10px",
        margin: "10px"
      }}
    >
      <h1>Profile Functional Component</h1>
      <h3>Name: {name}</h3>
      <h3>Address: {city}</h3>
      <h3>Email: {email}</h3>
      <h2>Count - {count}</h2>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  );
};

export default ProfileFC;