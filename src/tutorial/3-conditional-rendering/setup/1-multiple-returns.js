import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isErros, setError] = useState(false);
  const [user, setUser] = useState("empty");
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
        console.log(user);
      })
      .catch((error) => setError(true));
  }, []);
  if (isLoading) {
    return (
      <h2>
        Loading...
        <CircularProgress />
      </h2>
    );
  } else if (isErros) {
    return <h2>Error</h2>;
  } else {
    return (
      <h2>
        Loaded for {user}
        <CircularProgress color="" />
      </h2>
    );
  }
};

export default MultipleReturns;
