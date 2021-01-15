import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [complexvalue, setComplexValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
  };
  const increase = () => {
    setValue(value + 1);
  };
  const randomise = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    setValue(random);
  };

  const complexIncrise = () => {
    setTimeout(() => {
      setComplexValue((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <section>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <div>
          <button className="btn" onClick={decrease}>
            Decrease
          </button>
          <button className="btn" onClick={() => randomise(-100, 100)}>
            Randomise
          </button>
          <button className="btn" onClick={increase}>
            Increase
          </button>
        </div>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Complex Counter</h2>
        <h1>{complexvalue}</h1>
        <div>
          <button className="btn" onClick={complexIncrise}>
            Incrise Later
          </button>
        </div>
      </section>
    </>
  );
};

export default UseStateCounter;
