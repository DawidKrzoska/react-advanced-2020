import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "encrypted",
  });

  const [buttonName, setButtonName] = useState("Decrypt the message");

  const clickHandlerDecryption = () => {
    if (buttonName === "Decrypt the message") {
      setPerson({ ...person, message: "Dawid Krzoska to Geniusz JS " });
      setButtonName("Encrypt Again");
    } else {
      setPerson({ ...person, message: "encrypted" });
      setButtonName("Decrypt the message");
    }
  };

  return (
    <>
      <h2>Use State with Objects</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={clickHandlerDecryption}>
        <h4>{buttonName}</h4>
      </button>
    </>
  );
};

export default UseStateObject;
