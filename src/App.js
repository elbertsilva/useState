import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [word, setWord] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={({ target }) => setWord(target.value)}
      ></input>
      <p>{word}</p>
    </div>
  );
}

export default App;
