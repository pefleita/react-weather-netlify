import { useState } from "react";
import { WeatherData } from "./WeatherData";
import { NoWeatherData } from "./NoWeatherData";
import styles from "./SearchWeather.module.css";
import { FaSearch } from "react-icons/fa";

export function SearchWeather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  //console.log(`${API_URL}?q=${form.city}&units=metric&lang=es&appid=${API_KEY}`);
  async function weatherData(e) {
    e.preventDefault();

    if (form.city === "") {
      alert("Escriba el nombre de una ciudad para conocer su clima");
    } else {
      const data = await fetch(
        `${API_URL}?q=${form.city}&units=metric&lang=es&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    console.log(name);
    console.log(value);

    if (name === "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <h2 className={styles.titleSearch}>Buscar clima</h2>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Ciudad"
            name="city"
            onChange={(e) => handleChange(e)}
          />
          <button
            className={styles.searchButton}
            onClick={(e) => weatherData(e)}
          >
            <FaSearch size={20} />
          </button>
        </form>
      </div>
      <div>
        {weather.data !== undefined ? (
          <WeatherData data={weather.data} />
        ) : <NoWeatherData />}
      </div>
    </>
  );
}
