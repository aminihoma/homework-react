import logo from "./logo.svg";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
        <p>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/homa-amini-ba327296"
            target="_blank"
            rel="noreferrer"
          >
            Homa Amini
          </a>{" "}
          and is{" "}
          <a
            href="https://www.linkedin.com/in/homa-amini-ba327296"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/homa-amini-ba327296"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
