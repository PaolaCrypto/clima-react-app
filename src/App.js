import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather defaultCity="Santo Domingo" />
        <footer>
          This project was coded by Paola Severino and is{" "}
          <a
            href="https://github.com/PaolaCrypto/clima-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
