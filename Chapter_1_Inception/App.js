// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );

//creating nested div elements with react
/*
<div id="parent">
  <div id="child">
    <h1>Nested elements from React!!</h1>
  </div>
</div>
*/

// const nestedElements = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Nested elements from React!!")
//   )
// );
// console.log(nestedElements);

/*
<div id="parent">
  <div id="child">
    <h1>Nested elements from React!!</h1>
    <h2>I am a h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Nested elements from React!!</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>
*/

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
