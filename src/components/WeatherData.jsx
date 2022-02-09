import styles from "./WeatherData.module.css";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { IconWeather } from "./IconWeather";

export function WeatherData({ data }) {
  console.log(data);
  const iconCode = data.cod !== "404" ? `${data.weather[0].icon}` : "null";
  /*const imgSrc =
    data.cod !== "404"
      ? `${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}@2x.png`
      : "null.png";*/

  return (
    <div className={styles.weatherDataContainer}>
      {data.cod !== "404" ? (
        <>
          <div className={styles.weatherDataBlockOne}>
            <div>
              <h1>El clima en <br/> {data.name}</h1>
              {/* <img src={`${imgSrc}`} alt={data.weather[0].description} /> */}
              <IconWeather icon={iconCode}/>
              <p className={styles.description}>
                {data.weather[0].description}
              </p>
            </div>
            <div>
              <p className={styles.temperature}>
                {Math.round(data.main.temp)}{" "}
                <span className={styles.deg}>&deg;C</span>
              </p>
              <p className={styles.tempMaxMin}>
                <span className={styles.max}>
                  {Math.round(data.main.temp_max)} &deg;C
                </span>{" "}
                /{" "}
                <span className={styles.min}>
                  {Math.round(data.main.temp_min)} &deg;C
                </span>
              </p>
            </div>
          </div>
          <div className={styles.weatherDataBlockTwo}>
            <p>
              <WiHumidity size={40} /> {data.main.humidity} %
            </p>
            <p>
              <WiSunrise size={40} />{" "}
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString("es-ES", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
            <p>
              <WiSunset size={40} />{" "}
              {new Date(data.sys.sunset * 1000).toLocaleTimeString("es-ES", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </>
      ) : (
        <div className={styles.cityNoFound}>
          <h2>No hay resultados para su búsqueda</h2>
        </div>
      )}
    </div>
  );
}
