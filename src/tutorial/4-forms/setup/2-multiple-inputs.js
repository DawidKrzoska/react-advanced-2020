import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let jsonbody = JSON.stringify(person);
    console.log(typeof person);
    console.log(typeof jsonbody);

    fetch("http://178.43.78.27:8080/auth/login/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: jsonbody,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="costam"
              id="password"
              name="password"
              value={person.password}
              onChange={handleInputs}
            />
          </div>
          <button type="Log in">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
