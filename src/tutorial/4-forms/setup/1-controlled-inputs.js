import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState([]);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email) {
      const person = { firstName, lastName, email, index };
      setPeople((oldPeople) => {
        return [...oldPeople, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setIndex(index + 1);
    }
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={firstNameHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Surname :</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={lastNameHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="eMail">E-mail :</label>
            <input
              type="email"
              id="eMail"
              name="eMail"
              value={email}
              onChange={emailHandler}
            ></input>
          </div>
          <button type="submit" className="btn">
            add person
          </button>
        </form>
        {people.map((person) => {
          const { index, firstName, lastName, email } = person;
          return (
            <div key={index} className="item">
              <h4>
                {firstName}&nbsp; {lastName}&nbsp;
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
