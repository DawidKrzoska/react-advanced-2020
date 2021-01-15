import React, { useState } from "react";

const UseStateBasics = () => {
  /* console.log(useState("Hello World"));
  const value = useState(1)[0];
  const handle = useState(1)[1]; */
  const [title, setTitle] = useState("New Title");

  const handleClick = () => {
    setTitle("New New Title");
  };

  return (
    <React.Fragment>
      <h2>useState basic example</h2>
      <h3>{title}</h3>
      <button className="btn" onClick={handleClick}>
        New Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
