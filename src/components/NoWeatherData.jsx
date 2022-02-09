import styles from "./NoWeatherData.module.css"; 
import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherShower,
} from "react-icons/ti";

export function NoWeatherData() {
  return (
    <div className={styles.noWeatherContainer}>
      <TiWeatherCloudy size={80} />
      <TiWeatherPartlySunny size={80} />
      <TiWeatherShower size={80} />
    </div>
  );
}
