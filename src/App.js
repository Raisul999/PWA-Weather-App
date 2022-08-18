import './App.css';
import { fetchWeather } from './api/fetchWaether'
import { useState } from 'react';


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  // const [toggle, setToogle] = useState(false);
  let date = new Date().getTime();
  let sunrise = 1660692881

  // let celsius = 0;
  // let farh = 0;
  // let celFeels = 0;
  // let farhFeels = 0;

  const search = async (e) => {
    // if (e.key === 'Enter') {
     if(query===''){
        alert('Please enter city')
        return false
     } 
    const data = await fetchWeather(query)
    setWeather(data.data)
    //  setQuery('')
    // }
  }


  return (
    <>
      {(sunrise < date) ? <div className="main-container-day">

        <div className="input-wrapper">
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

        </div>
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
            <p>Summary</p>
            <div className="others">
              Wind {weather.wind.speed} km/h&nbsp;&nbsp;&nbsp;
              Humidity {weather.main.humidity}%

            </div>
            <div className="others">
              Pressure {weather.main.pressure}mb&nbsp;&nbsp;&nbsp;
              Visibility {Math.round(weather.visibility / 1000)}km
            </div>
          </div>

        )}
      </div> : <div className="main-container-night">

        <div className="input-wrapper">
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

        </div>


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

            <p>Summary</p>
            <div className="others">
              Wind {weather.wind.speed} km/h&nbsp;&nbsp;&nbsp;
              Humidity {weather.main.humidity}%

            </div>
            <div className="others">
              Pressure {weather.main.pressure}mb&nbsp;&nbsp;&nbsp;
              Visibility {Math.round(weather.visibility / 1000)}km
            </div>

          </div>
        )}
      </div>}
    </>
  );
}

export default App;
