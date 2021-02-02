import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit</h2>
      <h3>{firstValue}</h3>
      <h3> value : {secondValue}</h3>
      <h3>{text || "Hello World"}</h3>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        {" "}
        toggle Error{" "}
      </button>
      <p>{isError && <h3>There is Error</h3>}</p>
      <p>{!isError && <h3>There is Error</h3>}</p>
      <p>{isError ? <h1>HELLO</h1> : <h4>Hello</h4>}</p>
    </>
  );
};

export default ShortCircuit;
