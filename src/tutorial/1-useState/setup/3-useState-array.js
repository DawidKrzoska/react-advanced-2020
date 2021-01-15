import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const [btnTitle, setBtnTitle] = React.useState("Remove Items");

  const clickHandleArray = () => {
    if (Array.isArray(people) && people.length) {
      setPeople([]);
      setBtnTitle("Restore All the items");
    } else {
      setPeople(data);
      setBtnTitle("Remove Items");
    }
  };
  const clickHandlePerosn = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4> {person.name}</h4>
            <button onClick={() => clickHandlePerosn(person.id)}>
              <h6>Remove</h6>
            </button>
          </div>
        );
      })}{" "}
      <button className="btn" onClick={clickHandleArray}>
        <h5>{btnTitle}</h5>
      </button>
      {}
    </>
  );
};

export default UseStateArray;
