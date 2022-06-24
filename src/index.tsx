// import React from "react";
// import ReactDOM from "react-dom";
// import { App } from "../src/App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../src/App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
  </>
);
