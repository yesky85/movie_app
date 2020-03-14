import React from "react";

function Food({ favourite }) {
  return <h3>I like {favourite}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Food favourite="kimchi" />
      <Food favourite="meat" />
      <Food favourite="fish" />
    </div>
  );
}

export default App;
