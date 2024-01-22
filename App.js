import React from "react";
import ReactDOM from "react-dom/client";

const nestedElements = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Nested elements from React!!"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested elements from React!!"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])
);
console.log(nestedElements);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);
