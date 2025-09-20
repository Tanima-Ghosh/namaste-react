/*<div id="parent">
    <div id="child">
        <h1>I am an h1 element</h1>
        <h2>I am an h1 element</h2>
    </div>

     <div id="child2">
        <h1>I am an h1 element</h1>
        <h2>I am an h1 element</h2>
    </div>
</div>*/

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 element"),
    React.createElement("h2", {}, "I am an h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 element"),
    React.createElement("h2", {}, "I am an h2 element"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);