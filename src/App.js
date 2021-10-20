import "./App.css";
import ReactFCCtest from "react-fcctest";
import { BasicModal } from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=&offset=`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div id="quote-box" className="App">
      <ReactFCCtest />
      <div id="text"></div>
      <div id="author"></div>
      <BasicModal data={characters} />
      <button id="new-quote"></button>
    </div>
  );
}

export default App;
