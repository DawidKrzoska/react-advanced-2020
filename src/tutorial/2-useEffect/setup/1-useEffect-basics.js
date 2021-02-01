import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value !== 0) {
      console.log(value);
      let title = "new title " + value;
      document.title = title;
    }
  });

  return (
    <>
      <h2>useEffect Basics</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        change title to {value}
      </button>
    </>
  );
};

export default UseEffectBasics;
