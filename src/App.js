import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// Your code here
const App = () => {
  return (
    <div>
      <h1>Adoṕt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
