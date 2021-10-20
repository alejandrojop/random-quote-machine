import "./App.css";
import ReactFCCtest from "react-fcctest";
import { BasicModal } from "./components/Modal";
import { useState, useEffect } from "react";

// const api_url = "https://zenquotes.io/api/quotes/";

const api = [
  {
    id: 0,
    quote: "La vaina esta buena pal que le gusta lo malo",
    autor: "Simon Bolivar",
  },
  {
    id: 1,
    quote: "No le pare bola a bola que bola no para bola",
    autor: "Benjamin Rauseo",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/15/`)
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // }, []);

  // Simulando el pedido a la API
  const fetchQuotes = () => {
    setIsLoading(true);
    setTimeout(() => {
      setQuotes(api);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div id="quote-box" className="App">
      <ReactFCCtest />
      <div id="text"></div>
      <div id="author"></div>
      <BasicModal data={quotes} />
      <button id="new-quote">Random</button>
    </div>
  );
}

export default App;
