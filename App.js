// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );

//creating nested div elements with react
/*
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>
*/

const nestedElements = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Nested elements from React!!")
  )
);

// console.log(nestedElements);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);
