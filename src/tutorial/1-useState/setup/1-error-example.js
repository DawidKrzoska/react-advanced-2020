import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = () => {
    title = "New Random title";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        {" "}
        Button{" "}
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
