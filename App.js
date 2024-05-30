import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", { id: "heading" }, "Hello from react");

// React component
const Title = () => {
  return <h1>Hi from title </h1>;
};

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>hi namaste react Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
