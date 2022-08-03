import './App.css';
import { fetchWeather } from './api/fetchWaether'
import { useState } from 'react';


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const search = async (e) => {
    // if (e.key === 'Enter') {
    const data = await fetchWeather(query)

    setWeather(data.data)
    //  setQuery('')
    // }
  }
  return (
    <div className="main-container">


      <input
        type="text"
        className="search"
        placeholder="Search by city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      // onKeyPress={search}
      />


      <button
        className="btn"
        onClick={search}
      >
        Search
      </button>


      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup><br />
          </div>
          <div className="city-feels">
            Feels like {Math.round(weather.main.feels_like)}
            <sup>&deg;C</sup><br />
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="wind">
            Wind {weather.wind.speed} km/h
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
