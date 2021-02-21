import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    var newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };
  return (
    <section className="">
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((item) => {
        return (
          <SinglePerson
            key={item.id}
            id={item.id}
            name={item.name}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        REMOVE person
      </button>
    </div>
  );
};

export default PropDrilling;
