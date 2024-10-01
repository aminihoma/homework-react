import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [result, setResult] = useState(false);

  function showTemperature(response) {
    setResult(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apikey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUnits = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${apiUnits}`;
    axios.get(apiUrl).then(showTemperature);
    console.log(apiUrl);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }
  if (result) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City.."
            onChange={handleInput}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature:{Math.round(temperature)}</li>
          <li>Descrioption:{description}</li>
          <li>Humidity:{humidity}%</li>
          <li>Wind:{wind}km/h/</li>
          <li>
            <img src={icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City.."
            onChange={handleInput}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
